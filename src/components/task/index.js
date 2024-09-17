
import ButtonTeste from '../buttonTeste';
import './Task.css';

function Salvar() {
  window.alert("ok")
}

function Task({ nome }) {
  return (
    <div className="login-container">
      <nav className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sprint</a>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h2>Sprints</h2>
        <div className="carousel-container">
          <button className="prev" >&#8249;</button>

          <div className="carousel-track">
            <div className="card" contentEditable="true">Sprint 1</div>
            <div className="card" contentEditable="true">Daily</div>
            <div className="card" contentEditable="true">Sprint 3</div>
          </div>

          <button className="next" >&#8250;</button>
        </div>

        <div className="action-buttons">
          <div>
            <input
              type="text"
              id="newCardContent"
              className="form-control new-card-input"
              placeholder="Novo card"
            />
            <button className="btn btn-success">Adicionar Card</button>
          </div>
          <div>
            <ButtonTeste text="alisson" onClick={Salvar} />
            <button className="btn btn-primary">Sair</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span className="user-info">Usuário - {nome}</span>
      </footer>
    </div>
  );
}

export default Task;
