import { useState, useEffect } from 'react';

import Acesso from './Acesso.jsx';
import Cadastro from './Cadastro.jsx';
import Vagas from './Vagas.jsx';
import Veiculos from './Veiculos.jsx';

export default function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPage(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState(null, '', to);
    setPage(to);
  };

  const renderPage = () => {
    switch (page) {
      case '/':
      case '/acesso':
        return <Acesso />;
      case '/cadastro':
        return <Cadastro />;
      case '/vagas':
        return <Vagas />;
      case '/veiculos':
        return <Veiculos />;
      default:
        return <div><h1>404 - Página não encontrada</h1></div>;
    }
  };

  return (
    <div>
      <nav className='navbar'>
        <button className='nav-button' onClick={() => navigate('/cadastro')}>Cadastro</button>
        <button className='nav-button' onClick={() => navigate('/veiculos')}>Veículos</button>
        <button className='nav-button' onClick={() => navigate('/acesso')}>Acesso</button>
        <button className='nav-button' onClick={() => navigate('/vagas')}>Pátio</button>
        
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}
