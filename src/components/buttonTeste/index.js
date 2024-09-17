import './ButtonTeste.css';

function ButtonTeste({text}) {

  return (
    <div className="login-container">
        <button className="btn btn-danger" onclick="deleteCard()">{text}</button>
    </div>
  );
}

export default ButtonTeste;