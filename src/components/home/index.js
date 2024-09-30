import './Style.css';
import Navbar from '../navbar';
import Home_presentation from '../home_presentation';

function Home() {
  return (
        <>
            <Navbar text=" Iniciar | Cadastre-se"/>
            <Home_presentation />
        </>
  );
}

export default Home;