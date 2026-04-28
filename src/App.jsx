import React, { useState } from 'react';
import { LayoutDashboard, Droplets, ArrowLeftRight, Coins } from 'lucide-react'; // Import ikon
import Dashboard from './components/Dashboard';
import Liquidity from './components/Liquidity';
import Trade from './components/Trade';
import Staking from './components/Staking';

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Mengaitkan nama menu dengan ikon yang sesuai
  const menuConfig = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Liquidity', icon: <Droplets size={20} /> },
    { name: 'Trade', icon: <ArrowLeftRight size={20} /> },
    { name: 'Staking', icon: <Coins size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center font-sans">
      
      {/* Container Utama */}
      <div className="w-full max-w-md min-h-screen bg-gray-900 shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Konten Halaman */}
        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {activeTab === 'Dashboard' && <Dashboard />}
          {activeTab === 'Liquidity' && <Liquidity />}
          {activeTab === 'Trade' && <Trade />}
          {activeTab === 'Staking' && <Staking />}
        </div>

        {/* Navigasi Bawah */}
        <div className="fixed bottom-0 w-full max-w-md bg-gray-950/80 backdrop-blur-lg border-t border-gray-800 flex justify-around p-3">
          {menuConfig.map((item) => (
            <button 
              key={item.name}
              onClick={() => setActiveTab(item.name)} 
              className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                activeTab === item.name ? 'text-yellow-500 scale-110' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {item.icon}
              <span className="text-[9px] font-bold uppercase tracking-wider">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default App;