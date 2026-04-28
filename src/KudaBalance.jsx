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
      // Menggunakan TonAPI untuk mengambil saldo jetton
      fetch(`https://tonapi.io/v2/accounts/${userAddress}/jettons/${KUDA_TOKEN_ADDRESS}`)
        .then((res) => res.json())
        .then((data) => {
          // Saldo biasanya dalam bentuk satuan terkecil, bagi dengan 10^9
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

  if (!userAddress) return null; // Tidak tampil jika dompet belum connect

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '8px', margin: '10px 0' }}>
      <p>Saldo $KUDA Anda:</p>
      {loading ? <p>Memuat...</p> : <h3>{balance.toLocaleString()} KUDA</h3>}
    </div>
  );
}

export default KudaBalance;