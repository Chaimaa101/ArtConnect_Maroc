import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextGenerale from './Context/ContextGenerale.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextGenerale>
      <App />
    </ContextGenerale>
  </StrictMode>,
)
