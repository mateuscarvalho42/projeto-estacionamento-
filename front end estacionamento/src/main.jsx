import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import veiculos from './veiculos.jsx' 
// const App = veiculos
// import cadastro from './cadastro.jsx' 
// const App = cadastro
import acesso from './acesso.jsx'
const App = acesso

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
