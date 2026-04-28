import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import WalletAssets from './components/WalletAssets'; // Import yang baru
import KudaSwap from './components/KudaSwap';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h1>DApps $KUDA</h1>
      <TonConnectButton />
      
      <WalletAssets />
      <KudaSwap />
    </div>
  );
}

export default App;