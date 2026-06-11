// Importa los estilos del navbar
import "../styles/navbar.css";

// Componente Navbar
function Navbar() {

  // Lo que retorna se renderiza en pantalla
  return (

    // Etiqueta semántica para navegación
    <nav className="navbar">

      {/* Contenedor del logo/título */}
      <div className="navbar-logo">

        Oke

      </div>

      {/* Menú de navegación */}
      <ul className="navbar-links">

        <li>
          <a href="/">Agenda</a>
        </li>

        <li>
          <a href="/imc">IMC</a>
        </li>

         <li>
          <a href="/">Log In</a>
        </li>

      </ul>

    </nav>

  );
}

// Exporta el componente para usarlo en otros archivos
export default Navbar;