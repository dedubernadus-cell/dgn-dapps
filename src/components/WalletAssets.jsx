import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

function WalletAssets() {
  const userAddress = useTonAddress();
  const [tonBalance, setTonBalance] = useState(0);
  const [jettons, setJettons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      
      // 1. Ambil Saldo TON Native
      fetch(`https://tonapi.io/v2/accounts/${userAddress}`)
        .then(res => res.json())
        .then(data => setTonBalance(data.balance / 1000000000))
        .catch(console.error);

      // 2. Ambil semua Jetton (Token)
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons`)
        .then(res => res.json())
        .then(data => setJettons(data.balances || []))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [userAddress]);

  if (!userAddress) return null;

  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '12px', border: '1px solid #ddd', marginTop: '20px' }}>
      <h3>Dompet Anda</h3>
      <div style={{ textAlign: 'left', marginBottom: '15px' }}>
        <p><strong>Saldo TON:</strong> {tonBalance.toFixed(3)} TON</p>
      </div>
      
      <hr />
      
      <h4>Aset Token:</h4>
      {loading ? <p>Memuat token...</p> : (
        jettons.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {jettons.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                 <img src={item.jetton.image} alt={item.jetton.symbol} style={{ width: '24px', marginRight: '10px', borderRadius: '50%' }} />
                 <span>{item.jetton.name}: {(item.balance / 10**item.jetton.decimals).toFixed(2)} {item.jetton.symbol}</span>
              </li>
            ))}
          </ul>
        ) : <p>Tidak ada token lain di dompet ini.</p>
      )}
    </div>
  );
}

export default WalletAssets;