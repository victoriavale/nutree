import { useState } from "react";
import "../styles/contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "Argentina",
    comentario: "",
  });

  const [mensaje, setMensaje] = useState("");

  // Actualiza los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setMensaje(
      "Recibimos tu consulta, en breve recibirás una respuesta."
    );

    // Limpia el formulario
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      pais: "Argentina",
      comentario: "",
    });
  };

  return (
    <div className="flex-container">
      <div className="flex-item">
        <h3>Dejanos tu Consulta</h3>

        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="+54 11 5689 2345"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <label>País</label>
          <select
            name="pais"
            value={formData.pais}
            onChange={handleChange}
          >
            <option value="Argentina">Argentina</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Chile">Chile</option>
            <option value="Peru">Perú</option>
          </select>

          <label>Comentario</label>
          <textarea
            name="comentario"
            rows="4"
            value={formData.comentario}
            onChange={handleChange}
          />

          <div className="btn-form">
            <button
              type="reset"
              className="btn-borrar"
              onClick={() =>
                setFormData({
                  nombre: "",
                  apellido: "",
                  email: "",
                  telefono: "",
                  pais: "Argentina",
                  comentario: "",
                })
              }
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

        {mensaje && (
          <p className="mensaje-exito">{mensaje}</p>
        )}
      </div>
    </div>
  );
}

export default Contacto;