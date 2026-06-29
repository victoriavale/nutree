import { useState, useEffect } from "react";
import "../styles/agenda.css";

function Agenda() {
  const [turnos, setTurnos] = useState([]);

  const [nuevoTurno, setNuevoTurno] = useState({
    dia: "",
    mes: "",
    hora: "",
    paciente: "",
  });

  // Cargar turnos desde localStorage
  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(datos);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNuevoTurno({
      ...nuevoTurno,
      [name]: value,
    });
  };

  // Guardar turno
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si ya existe un turno en la misma fecha y hora
    const existe = turnos.some(
      (t) =>
        t.dia === nuevoTurno.dia &&
        t.mes === nuevoTurno.mes &&
        t.hora === nuevoTurno.hora
    );

    if (existe) {
      alert("Ese turno ya está ocupado.");
      return;
    }

    setTurnos([...turnos, nuevoTurno]);

    setNuevoTurno({
      dia: "",
      mes: "",
      hora: "",
      paciente: "",
    });
  };

  return (
    <div className="flex-container">
      <div className="flex-item">
        


    <div className="agenda">

      <h3>Agenda</h3>

      <form onSubmit={handleSubmit} className="form-turno">

        <label>Día</label>
        <input
          type="number"
          name="dia"
          min="1"
          max="31"
          value={nuevoTurno.dia}
          onChange={handleChange}
          required
        />

        <label>Mes</label>
        <input
          type="number"
          name="mes"
          min="1"
          max="12"
          value={nuevoTurno.mes}
          onChange={handleChange}
          required
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={nuevoTurno.hora}
          onChange={handleChange}
          required
        />

        <label>Nombre del paciente</label>
        <input
          type="text"
          name="paciente"
          value={nuevoTurno.paciente}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Guardar turno
        </button>

      </form>

      <table className="tabla-turnos">

        <thead>
          <tr>
            <th>Día</th>
            <th>Mes</th>
            <th>Hora</th>
            <th>Paciente</th>
          </tr>
        </thead>

        <tbody>

          {turnos.length === 0 ? (
            <tr>
              <td colSpan="4">
                No hay turnos registrados
              </td>
            </tr>
          ) : (
            turnos.map((turno, index) => (
              <tr key={index}>
                <td>{turno.dia}</td>
                <td>{turno.mes}</td>
                <td>{turno.hora}</td>
                <td>{turno.paciente}</td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>


    </div>
    </div>
  );
}

export default Agenda;