import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import KudaBalance from './KudaBalance';
import KudaSwap from './KudaSwap';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. Bagian Header (Connect Wallet) */}
      <header style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
        <h1>DApps $KUDA</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
           <TonConnectButton />
        </div>
      </header>

      {/* 2. Bagian Utama (Dashboard) */}
      <main>
        {/* Saldo akan muncul di sini jika dompet terhubung */}
        <KudaBalance />
        
        {/* Pemisah */}
        <div style={{ margin: '30px 0' }}></div>
        
        {/* Tombol Swap */}
        <KudaSwap />
      </main>

    </div>
  );
}

export default App;