import React from 'react';

const KUDA_TOKEN_ADDRESS = 'EQDCx47-zUCwazuboKpVIlwm2XFWgIv-CciZuJs7XeKJLayO';

function KudaSwap() {
  const swapUrl = `https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=${KUDA_TOKEN_ADDRESS}`;

  return (
    <div style={{ marginTop: '20px', padding: '10px', textAlign: 'center' }}>
      <h2>Menu Swap $KUDA</h2>
      <iframe
        src={swapUrl}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '600px',
          border: 'none',
          borderRadius: '16px',
        }}
        title="STON.fi Swap"
      />
    </div>
  );
}

export default KudaSwap;