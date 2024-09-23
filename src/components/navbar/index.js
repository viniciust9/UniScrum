import './Style.css';
import { useNavigate } from 'react-router-dom';

function Navbar({ text }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <section data-bs-version="5.1" className="menu menu2 cid-sFCw1qGFAI" once="menu" id="menu2-23">
      <nav className="navbar navbar-dropdown navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black display-7" href="/">Uniscrum</a>
            </span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#features1-1i">Vantagens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#header14-1j">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#contacts4-21">Siga-nos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#features24-20">Obtenha</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#form5-1m">Mensagem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="index.html#contacts2-1r">Contato</a>
              </li>
            </ul>

            <div className="navbar-buttons mbr-section-btn">
              <a className="btn btn-primary display-4" onClick={handleLoginClick}>
                {text}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
