import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import KudaBalance from './KudaBalance';
import WalletTokens from './WalletTokens';
import KudaSwap from './KudaSwap';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>DApps $KUDA</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TonConnectButton />
        </div>
      </header>
      
      <main>
        <KudaBalance />
        <WalletTokens />
        <KudaSwap />
      </main>
    </div>
  );
}

export default App;