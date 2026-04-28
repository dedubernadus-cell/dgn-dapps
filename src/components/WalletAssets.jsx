import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

function WalletAssets() {
  const userAddress = useTonAddress();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      // Mengambil daftar jetton dari API TonAPI
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data Token dari API:", data); // Detektor untuk melihat apakah token terdeteksi
          setTokens(data.balances || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal ambil token:", err);
          setLoading(false);
        });
    }
  }, [userAddress]);

  if (!userAddress) return null;

  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '12px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h3>Aset Anda di Jaringan TON</h3>
      {loading ? <p>Memuat semua aset...</p> : (
        tokens.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tokens.map((token, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #eee' }}>
                <strong>{token.jetton.name}</strong>: 
                {(token.balance / 10**token.jetton.decimals).toFixed(2)} {token.jetton.symbol}
              </li>
            ))}
          </ul>
        ) : <p>Tidak ada token lain terdeteksi di dompet ini.</p>
      )}
    </div>
  );
}

export default WalletAssets;