import React, { useState } from 'react';

const RegisterForm = ({ onSwitch, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Data Register:", formData);
    
    setTimeout(() => {
        alert("Tinggal masukin endpoint bg");
        setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Buat Akun</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input 
            type="text" 
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="Nama Anda"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="email@contoh.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="••••••••"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className={`w-full bg-main text-white font-semibold py-3 rounded-xl shadow-lg transition-all 
            ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-main-dark active:scale-95'}
          `}
        >
          {isLoading ? (
             <span className="flex items-center justify-center gap-2">
                <i className='bx bx-loader-alt animate-spin'></i> Memproses...
             </span>
          ) : 'Daftar'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <button onClick={onSwitch} className="text-main font-semibold hover:underline">
          Sudah punya akun? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;