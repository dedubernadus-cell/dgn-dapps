import React, { useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

const Staking = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [amount, setAmount] = useState('');

  const handleStake = async () => {
    // Ini adalah template transaksi ke Smart Contract
    const transaction = {
      messages: [
        {
          address: "ALAMAT_SMART_CONTRACT_RUFFLES_DISINI", // Ganti dengan alamat kontrak asli
          amount: (parseFloat(amount) * 1000000000).toString(), // Konversi ke NanoTON
          // payload: "...", // Ini biasanya data tambahan dari Ton Ruffles
        }
      ]
    };

    try {
      await tonConnectUI.sendTransaction(transaction);
      alert("Transaksi Staking dikirim ke Ton Ruffles!");
    } catch (e) {
      console.error(e);
      alert("Gagal mengirim transaksi");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Staking (via Ton Ruffles)</h2>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Jumlah TON/KUDA" 
          className="w-full p-4 bg-gray-50 rounded-xl border mb-4" 
        />
        
        <button 
          onClick={handleStake}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition"
        >
          Konfirmasi Deposit ke Ruffles
        </button>
      </div>
    </div>
  );
};

export default Staking;