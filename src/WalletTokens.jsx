import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

function WalletTokens() {
  const userAddress = useTonAddress();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      console.log("Mencoba mengambil data untuk alamat:", userAddress); // Sensor 1
      
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons`)
        .then((res) => {
          console.log("Status Response API:", res.status); // Sensor 2
          return res.json();
        })
        .then((data) => {
          console.log("Data yang diterima dari API:", data); // Sensor 3
          setTokens(data.balances || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error saat fetch API:", err); // Sensor 4
          setLoading(false);
        });
    }
  }, [userAddress]);

  if (!userAddress) return null;

  return (
    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h3>Aset Anda:</h3>
      {loading ? <p>Memuat data...</p> : (
        tokens.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tokens.map((token, index) => (
              <li key={index}>
                {token.jetton.name}: {(token.balance / 10**token.jetton.decimals).toFixed(2)} {token.jetton.symbol}
              </li>
            ))}
          </ul>
        ) : <p>Tidak ada token jetton ditemukan di dompet ini.</p>
      )}
    </div>
  );
}

export default WalletTokens;