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

  // JIKA BELUM CONNECT: Tampilkan pesan edukasi
  if (!userAddress) {
    return (
      <div style={{ padding: '15px', background: '#fff3cd', borderRadius: '8px', margin: '20px 0', border: '1px solid #ffeeba', color: '#856404' }}>
        <p>Silakan hubungkan dompet untuk melihat saldo $KUDA Anda.</p>
      </div>
    );
  }

  // JIKA SUDAH CONNECT: Tampilkan saldo
  return (
    <div style={{ padding: '15px', background: '#d4edda', borderRadius: '8px', margin: '20px 0', border: '1px solid #c3e6cb', color: '#155724' }}>
      <p>Saldo $KUDA Anda:</p>
      {loading ? <p>Memuat saldo...</p> : <h3>{balance.toLocaleString()} KUDA</h3>}
    </div>
  );
}

export default KudaBalance;