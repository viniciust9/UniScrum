import { CIcon } from '@coreui/icons-react';
import { cilHamburgerMenu, cilShieldAlt } from '@coreui/icons';
import { useNavigate } from "react-router-dom";

function Navbar_logado({ text }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <section data-bs-version="5.1" className="menu menu2 cid-sFCw1qGFAI" once="menu" id="menu2-23">
      <nav className="navbar navbar-dropdown navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <div style={{width: 48 + 'px'}}>
              <CIcon icon={cilHamburgerMenu} className="text-body-tertiary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"/>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <a className="nav-link link text-black text-primary display-4" href="/">Início</a>
              </li>
            </ul>

            <div className="navbar-buttons mbr-section-btn">
              <a className="btn btn-primary display-4" onClick={handleLoginClick}>
                Sair
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Uniscrum</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div>
    </section> 
    
  );
}

export default Navbar_logado;
