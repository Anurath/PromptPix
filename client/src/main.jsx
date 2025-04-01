import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import AppContextProvider from './context/AppContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>

)
