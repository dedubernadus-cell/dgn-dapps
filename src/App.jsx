// Pastikan di App.jsx ada kedua komponen ini:
import WalletTokens from './WalletTokens';
import KudaBalance from './KudaBalance'; // Komponen saldo TON yang lama

// ... di dalam return App:
<>
  <KudaBalance />  {/* Untuk melihat saldo TON */}
  <WalletTokens /> {/* Untuk melihat saldo Jetton */}
</>