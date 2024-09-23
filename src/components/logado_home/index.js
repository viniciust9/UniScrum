import { useNavigate } from "react-router-dom";
import Navbar_logado from "./navbar";
import { CIcon } from '@coreui/icons-react';
import { cilHamburgerMenu, cilShieldAlt } from '@coreui/icons';

function Logado_home({ text }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <>
      <Navbar_logado />
    </>
  );
}

export default Logado_home;
