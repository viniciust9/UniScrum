import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <Container fluid>
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
                    <input
                      type="text"
                      name="usuario"
                      placeholder="Usuario"
                      data-form-field="usuario"
                      className="form-control"
                      value={usuario} // Bind do valor do estado
                      onChange={(e) => setUsuario(e.target.value)} // Manipulador onChange
                      id="usuario-form4-0"
                    />
                  </div>
                  <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="senha">
                    <input
                      type="password"
                      name="senha"
                      placeholder="Senha"
                      data-form-field="senha"
                      className="form-control"
                      value={senha} // Bind do valor do estado
                      onChange={(e) => setSenha(e.target.value)} // Manipulador onChange
                      id="senha-form4-0"
                    />
                  </div>
                  <div className="col-12 col-md-auto mbr-section-btn">
                    <a className="btn btn-primary display-4" href="/admin/Admin/listaUsuarios">Entrar</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </Container>
    </>
  );
}

export default Login;
