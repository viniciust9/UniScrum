import './Home.css';

function Home() {
  return (
    <div className="login-container">
    <div class="d-flex">
        <nav class="sidebar">
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link" href="#"onclick="goToTelaMenuInicial()">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="goToTelaCriarDaily()">Criar Daily</a></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="goToTelaDailyUsuario()">Sprint</a></li>
            </ul>
        </nav>

        <div class="content p-4">
        </div>
    </div>

   
    <footer class="footer d-flex justify-content-between align-items-center p-3">
        <span class="user-info">Usuário - Admin</span>
        <button class="btn btn-primary" onclick="goToTelaLogin()">Sair</button>
    </footer>
    </div>
  );
}

export default Home;