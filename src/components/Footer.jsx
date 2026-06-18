import "../styles/footer.css";


import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section py-3 my-4">

       <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-success-emphasis" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-success-emphasis"
                to="/imc"
              >
                IMC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-success-emphasis" to="/agenda">
                Agenda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-success-emphasis" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© Oke 2026</p>
        </footer>



     

         
            
  );
}

export default Footer