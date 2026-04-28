import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

function WalletTokens() {
  const userAddress = useTonAddress();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons`)
        .then((res) => res.json())
        .then((data) => {
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
    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h3>Aset Anda:</h3>
      {loading ? <p>Memuat...</p> : (
        tokens.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tokens.map((token, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {token.jetton.name}: {(token.balance / 10**token.jetton.decimals).toFixed(2)} {token.jetton.symbol}
              </li>
            ))}
          </ul>
        ) : <p>Tidak ada token ditemukan.</p>
      )}
    </div>
  );
}

export default WalletTokens;