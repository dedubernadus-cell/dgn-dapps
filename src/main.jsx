import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './index.css'; // Penting: Ini yang menghubungkan Tailwind ke aplikasi Bapak

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ton-connect/demo-dapp-with-react-ui/master/public/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);