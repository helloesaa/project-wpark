import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import 'boxicons/css/boxicons.min.css'
// Import AuthProvider yang baru kita buat
import { AuthProvider } from './Authh/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bungkus App dengan AuthProvider agar Context jalan */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)