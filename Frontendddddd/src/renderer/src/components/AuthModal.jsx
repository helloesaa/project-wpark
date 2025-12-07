import React, { useState } from 'react';
import LoginForm from '../Authh/login/Login'; 
import RegisterForm from '../Authh/login/Register'; 
const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative mx-4 transform transition-all" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <i className='bx bx-x text-3xl'></i>
        </button>

        {isLoginView ? (
          <LoginForm 
            onSwitch={() => setIsLoginView(false)} 
            onClose={onClose}
          />
        ) : (
          <RegisterForm 
            onSwitch={() => setIsLoginView(true)} 
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;