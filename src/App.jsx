// ... import lainnya ...
import WalletTokens from './WalletTokens'; // Import komponen baru

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      {/* Header */}
      <header>
        <h1>DApps $KUDA</h1>
        <TonConnectButton />
      </header>

      {/* Ganti KudaBalance dengan WalletTokens */}
      <WalletTokens />
      
      {/* Swap tetap ada */}
      <KudaSwap />
    </div>
  );
}