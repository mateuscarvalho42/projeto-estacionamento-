import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// import veiculos from './veiculos.jsx' 
// const App = veiculos
import cadastro from './cadastro.jsx' 
const App = cadastro
// import acesso from './acesso.jsx'
// const App = acesso
//import vagas from './vagas.jsx'
//const App = vagas


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
