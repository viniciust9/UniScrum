import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import './Style.css';

function Login({ text }) {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/logado_home');
  };
  return (
    <>
      <Navbar text=" Login"/>

      <section data-bs-version="5.1" className="form4 bg-white mbr-fullscreen" id="form4-0">
        <div className="container">
          <div className="row content-wrapper justify-content-center">
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
              <form action="../dashboard-Uniscrum/index.html" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name">
                <input type="hidden" name="email" data-form-email="true" value="y6GtADa1ZOqY9P/Bk2CrNyzClqgbpyUKe9w8ZSGcYg3Yv69x+L+DaJ8/V6WDWmobtuQNwu8eVTHmgnMDVXPuvcTwoaZpthA5naP929D3FVED+2ijkdG/H3FaARfkXuxO" />
                <div className="row">
                  <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Login realizado com sucesso!</div>
                  <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">
                    Oops...! Algo deu errado!
                  </div>
                </div>
                <div className="dragArea row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className="mbr-section-title mb-4 display-2">
                      <strong>Login</strong>
                    </h1>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="mbr-text mbr-fonts-style mb-4 display-7">
                      Seja bem-vindo!<br /> Vamos começar fazendo login.
                    </p>
                  </div>
                  <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="usuario">
                    <input type="text" name="usuario" placeholder="Usuario" data-form-field="usuario" className="form-control" value="" id="usuario-form4-0" />
                  </div>
                  <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="senha">
                    <input type="password" name="senha" placeholder="Senha" data-form-field="senha" className="form-control" value="" id="senha-form4-0" />
                  </div>
                  <div className="col-12 col-md-auto mbr-section-btn">
                    <a className="btn btn-primary display-4" onClick={handleEnterClick}>Entrar</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
