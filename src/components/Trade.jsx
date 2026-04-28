import React, { useState } from 'react';

const Trade = () => {
  const [mode, setMode] = useState('buy');
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');
  const [showSettings, setShowSettings] = useState(false);
  
  const gasFee = "0.005 TON";

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">$KUDA / TON</h2>
        <button onClick={() => setShowSettings(!showSettings)} className="text-gray-400 hover:text-indigo-600">
          ⚙️ Settings
        </button>
      </div>

      {/* 1. CHART AREA (Kembali muncul) */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">📈</span>
        </div>
        <p className="text-gray-500 font-medium">Chart Coming Soon</p>
        <p className="text-xs text-gray-400">Data listing akan muncul di sini</p>
      </div>

      {/* 2. SWAP AREA (Bawah Chart) */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
        {/* Menu Settings */}
        {showSettings && (
          <div className="mb-4 bg-gray-50 p-3 rounded-xl border">
            <label className="text-xs text-gray-500 font-bold mb-2 block">Slippage Tolerance (%)</label>
            <div className="flex gap-2">
              {['0.1', '0.5', '1.0', '3.0'].map((val) => (
                <button key={val} onClick={() => setSlippage(val)} className={`px-3 py-1 rounded-lg text-sm font-bold ${slippage === val ? 'bg-indigo-600 text-white' : 'bg-white border text-gray-600'}`}>{val}%</button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-200 p-1 rounded-xl flex mb-6">
          <button onClick={() => setMode('buy')} className={`flex-1 py-2 rounded-lg font-bold ${mode === 'buy' ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`}>Buy</button>
          <button onClick={() => setMode('sell')} className={`flex-1 py-2 rounded-lg font-bold ${mode === 'sell' ? 'bg-white shadow text-red-600' : 'text-gray-500'}`}>Sell</button>
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-400">Pay</label>
          <input type="number" placeholder="0.0" className="w-full text-2xl font-bold outline-none" onChange={(e) => setAmount(e.target.value)} />
        </div>
        
        <div className="text-center my-2 text-indigo-600 font-bold">↓</div>

        <div className="mb-6">
          <label className="text-xs text-gray-400">Receive (Estimate)</label>
          <div className="text-2xl font-bold text-gray-800">
            {amount ? (mode === 'buy' ? amount * 200 : amount / 200).toFixed(2) : '0.0'} 
            <span className="text-sm ml-2 text-gray-500">{mode === 'buy' ? '$KUDA' : 'TON'}</span>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mb-4 px-2">
          <span>Gas Fee:</span>
          <span className="font-mono">{gasFee}</span>
        </div>

        <button 
          className={`w-full py-4 rounded-2xl font-bold text-white transition ${mode === 'buy' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-red-600 hover:bg-red-700'}`}
          onClick={() => alert(`Memproses ${mode} dengan Slippage ${slippage}%`)}
        >
          Confirm {mode === 'buy' ? 'Buy' : 'Sell'}
        </button>
      </div>
    </div>
  );
};

export default Trade;