import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

function WalletTokens() {
  const userAddress = useTonAddress();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      // Mengambil SEMUA jetton dari dompet user
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons`)
        .then((res) => res.json())
        .then((data) => {
          setTokens(data.balances || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal ambil data token:", err);
          setLoading(false);
        });
    }
  }, [userAddress]);

  if (!userAddress) return null;

  return (
    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h3 style={{ marginBottom: '15px' }}>Aset Anda di Jaringan TON:</h3>
      {loading ? <p>Memuat daftar aset...</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tokens.map((token, index) => (
            <li key={index} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={token.jetton.image} alt={token.jetton.symbol} style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }} />
                <div>
                  <h4 style={{ margin: 0 }}>{token.jetton.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.8em', color: '#666' }}>
                    {(token.balance / 10**token.jetton.decimals).toLocaleString()} {token.jetton.symbol}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {tokens.length === 0 && !loading && <p>Tidak ada token lain ditemukan.</p>}
    </div>
  );
}

export default WalletTokens;