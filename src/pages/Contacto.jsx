import { NavLink } from "react-router-dom";
import "../styles/contacto.css";

function Contacto() {
  return (
    <div className="flex-container">

        <div
          className="flex-item"
        >

          <h3>Dejanos tu Consulta</h3>

          <form>

            <label>Nombre</label>

            <input
              type="text"
              name="nombre"
              required
            />

            <label>Apellido</label>

            <input
              type="text"
              name="apellido"
              required
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              required
            />

            <label>Teléfono</label>

            <input
              type="text"
              name="telefono"
              placeholder="+54 11 5689 2345"
              required
            />

            <label>País</label>

            <select defaultValue="Argentina">

              <option value="Argentina">
                Argentina
              </option>

              <option value="Uruguay">
                Uruguay
              </option>

              <option value="Chile">
                Chile
              </option>

              <option value="Peru">
                Perú
              </option>

            </select>

            <label>Comentario</label>

            <textarea
              name="comentario"
              rows="4"
            />

            <div className="btn-form">

              <button
                type="reset"
                className="btn-borrar"
              >
                BORRAR
              </button>

              <button
                type="submit"
                className="btn-enviar"
              >
                ENVIAR
              </button>

            </div>

          </form>

        </div>

      </div>


  );
}




export default Contacto;