import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import veiculos from './veiculos.jsx' 
// const App = veiculos
// import cadastro from './cadastro.jsx' 
// const App = cadastro
// import acesso from './acesso.jsx'
// const App = acesso
import vagas from './vagas.jsx'
const App = vagas


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
