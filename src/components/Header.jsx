import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/img/logo2.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" >
            <img src={logo} alt="Logo" width={40} height={40} />
             <span> Oke</span>
          </NavLink>
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-success-emphasis" aria-current="page" to="/agenda">
                  Agenda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-success-emphasis"
                  aria-current="page"
                  to="/imc"
                >
                  IMC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-success-emphasis"
                  aria-current="page"
                  to="/contacto"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        
      </nav>
    </header>
  );
}

export default Header;