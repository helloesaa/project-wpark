import React, { useState } from 'react';
import { useAuth } from '../../Authh/AuthContext'; // Sesuaikan path import context kamu

const LoginForm = ({ onSwitch, onClose }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      setFormData({ email: '', password: '' });
      onClose(); 
    } else {
      setErrorMsg(result.message || "Email atau password salah");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang</h2>
        {errorMsg && (
          <div className="bg-red-50 text-red-500 text-sm py-2 px-4 rounded-lg mt-2 border border-red-100">
            <i className='bx bx-error-circle mr-2'></i>
            {errorMsg}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          ) : 'Masuk'}
        </button>
      </form>

      {/* Tombol Switch ke Register */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <button onClick={onSwitch} className="text-main font-semibold hover:underline">
          Belum punya akun? Daftar
        </button>
      </div>
    </div>
  );
};

export default LoginForm;