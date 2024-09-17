import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Substitui o nome da empresa pela imagem */}
        <div className='divlogo'> 
        <img src="/logouniscrum.png" alt="Company Logo" className="company-logo logo" />
        </div> 
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Insira seu email" required />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Insira sua senha" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Ainda não possui uma conta? <a href="/signup">Crie agora</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;