import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import Home from '../home';
import Login from '../login';
import Logado_home from '../logado_home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logado_home" element={<Logado_home />} />
      </Routes>
    </Router>
    );
}

export default App;