import React from 'react';

const Liquidity = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Liquidity</h2>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <input type="number" placeholder="0.0 TON" className="w-full p-4 bg-gray-50 rounded-xl border" />
          <div className="text-center text-gray-400">+</div>
          <input type="number" placeholder="0.0 $KUDA" className="w-full p-4 bg-gray-50 rounded-xl border" />
          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition">
            Add Liquidity (Coming Soon)
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">Likuiditas saat ini terkunci untuk keamanan.</p>
      </div>
    </div>
  );
};

export default Liquidity;