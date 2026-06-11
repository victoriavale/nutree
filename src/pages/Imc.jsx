import { useState } from "react";
import "../styles/imc.css";

function ImcCalculator() {

  const [sexo, setSexo] = useState("Hombre");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const edadNum = parseInt(edad);

    if (
      isNaN(pesoNum) ||
      isNaN(alturaNum) ||
      isNaN(edadNum) ||
      pesoNum <= 0 ||
      alturaNum <= 0 ||
      edadNum <= 0
    ) {
      setResultado("Por favor, ingresa valores válidos.");
      return;
    }

    const alturaMetros = alturaNum / 100;

    const imc =
      pesoNum / (alturaMetros * alturaMetros);

    let categoria = "";

    if (imc < 18.5) {
      categoria = "Bajo peso";
    } else if (imc < 25) {
      categoria = "Peso normal";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidad";
    }

    let mensaje =
      `${imc.toFixed(2)} (${categoria})`;

    if (sexo === "Hombre") {
      mensaje +=
        edadNum > 45
          ? " - Recuerda cuidar tu salud cardiovascular."
          : " - Mantente activo y saludable.";
    } else {
      mensaje +=
        edadNum > 50
          ? " - Es importante controlar el IMC durante la menopausia."
          : " - Sigue cuidando tu bienestar.";
    }

    setResultado(mensaje);
  };

  return (
    <div className="container imc-container">

      <div className="card shadow">

        <div className="title-badge">
          Calculadora IMC
        </div>

        <p className="text-center fw-bold">
          COMPLETAR CON LOS DATOS DEL PACIENTE
        </p>

        <div className="row mb-3">

          <div className="col-md-6">
            <label className="form-label">
              Sexo
            </label>

            <select
              className="form-select"
              value={sexo}
              onChange={(e) =>
                setSexo(e.target.value)
              }
            >
              <option>Hombre</option>
              <option>Mujer</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Edad
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Años"
              value={edad}
              onChange={(e) =>
                setEdad(e.target.value)
              }
            />
          </div>

        </div>

        <div className="row mb-3">

          <div className="col-md-6">
            <label className="form-label">
              Peso <span className="badge">kg</span>
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Ej: 70"
              value={peso}
              onChange={(e) =>
                setPeso(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Altura <span className="badge">cm</span>
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Ej: 175"
              value={altura}
              onChange={(e) =>
                setAltura(e.target.value)
              }
            />
          </div>

        </div>

        <div className="d-grid mt-4">

          <button
            className="btn "
            onClick={calcularIMC}
          >
            CALCULAR
          </button>

        </div>

      </div>

      <div className="card shadow">

        <table className="table table-bordered text-center">

          <tbody>

            <tr>

              <td>IMC</td>

              <td>{resultado}</td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="card shadow">

        <h5 className="text-center">
          Clasificación del IMC
        </h5>

        <table className="table table-bordered">

          <thead>
            <tr className="text-center">
              <th>Composición corporal</th>
              <th>IMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Peso inferior al normal</td>
              <td className="text-center">
                {"<"} 18.5
              </td>
            </tr>

            <tr>
              <td>Normal</td>
              <td className="text-center">
                18.5 - 24.9
              </td>
            </tr>

            <tr>
              <td>Sobrepeso</td>
              <td className="text-center">
                25 - 29.9
              </td>
            </tr>

            <tr>
              <td>Obesidad</td>
              <td className="text-center">
                ≥ 30
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ImcCalculator;