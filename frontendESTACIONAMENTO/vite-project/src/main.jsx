import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import veiculos from './veiculos'
//import App from './App.jsx'
//import cadastro from './cadastro'
const App = veiculos


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
