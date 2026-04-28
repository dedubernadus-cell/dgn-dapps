import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const Dashboard = () => {
  // Link logo dari yang Bapak berikan
  const logoUrl = "https://i.ibb.co.com/Cp4HK91C/IMG-20260422-103502.png";

  return (
    <div className="space-y-6">
      
      {/* Header dengan Logo & Judul */}
      <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 shadow-inner">
        <div className="flex items-center gap-3">
          {/* Komponen Logo */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-500 shadow-lg">
            <img 
              src={logoUrl} 
              alt="Logo KUDA" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Portfolio</h2>
            <p className="text-xs text-yellow-500 font-medium">Ekosistem $KUDA</p>
          </div>
        </div>
        
        {/* Tombol Connect (TonConnect) */}
        <div className="scale-90 transform origin-right">
          <TonConnectButton />
        </div>
      </div>

      {/* Saldo Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card TON */}
        <div className="bg-gray-800 p-5 rounded-3xl border border-gray-700 shadow-xl">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Balance TON</p>
          <h3 className="text-xl font-extrabold text-white mt-1">1.25 <span className="text-sm font-normal text-gray-500">TON</span></h3>
        </div>
        
        {/* Card $KUDA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-5 rounded-3xl shadow-2xl">
          <p className="text-xs font-medium text-indigo-100 uppercase tracking-wider">$KUDA Balance</p>
          <h3 className="text-xl font-extrabold text-white mt-1">5,400.00 <span className="text-sm font-normal text-indigo-200">$KUDA</span></h3>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;