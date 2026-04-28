import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

const KUDA_TOKEN_ADDRESS = 'EQDCx47-zUCwazuboKpVIlwm2XFWgIv-CciZuJs7XeKJLayO';

function KudaBalance() {
  const userAddress = useTonAddress();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons/${KUDA_TOKEN_ADDRESS}`)
        .then((res) => res.json())
        .then((data) => {
          const rawBalance = data.balance || 0;
          const readableBalance = rawBalance / 1000000000; 
          setBalance(readableBalance);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal ambil saldo:", err);
          setLoading(false);
        });
    }
  }, [userAddress]);

  if (!userAddress) return null;

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '8px', margin: '10px 0' }}>
      <p>Saldo $KUDA Anda:</p>
      {loading ? <p>Memuat...</p> : <h3>{balance.toLocaleString()} KUDA</h3>}
    </div>
  );
}

export default KudaBalance;