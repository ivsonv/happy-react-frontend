import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import './styles/global.css'
import './styles/pages/landing.css'

import logoimg from './images/Logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt='Happy' />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Distrito Federal</strong>
          <span>Brasília</span>
        </div>
        <a href="https://" className='enter-app'> <FiArrowRight size={26} color="rgba(0,0,0,0.6)" /> </a>
      </div>
    </div>
  );
}

export default App;
