import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/providers/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
)
