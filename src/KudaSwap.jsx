import React from 'react';

const KUDA_TOKEN_ADDRESS = 'EQDCx47-zUCwazuboKpVIlwm2XFWgIv-CciZuJs7XeKJLayO';

function KudaSwap() {
  const swapUrl = `https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=${KUDA_TOKEN_ADDRESS}`;

  return (
    <div style={{ marginTop: '30px', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h2>Menu Swap $KUDA</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Klik tombol di bawah untuk menukar TON ke $KUDA di STON.fi
      </p>
      <a 
        href={swapUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#0070f3', // Warna biru modern
          color: 'white',
          padding: '15px 30px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        Tukar $KUDA Sekarang 🚀
      </a>
    </div>
  );
}

export default KudaSwap;