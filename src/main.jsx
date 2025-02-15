import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './Store/ContexStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />

      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
