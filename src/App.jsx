import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import KudaBalance from './KudaBalance';
import KudaSwap from './KudaSwap';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      
      {/* Header dengan Tombol Connect Wallet */}
      <header style={{ marginBottom: '30px' }}>
        <h1>DApps $KUDA</h1>
        <p>Proyek resmi komunitas kita</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
           <TonConnectButton />
        </div>
      </header>

      {/* Konten Dashboard */}
      <main>
        <KudaBalance />
        <hr style={{ margin: '30px 0', borderColor: '#eee' }} />
        <KudaSwap />
      </main>

    </div>
  );
}

export default App;