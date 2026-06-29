import { useState } from "react";

import IngredientList from "../components/IngredientList";
import Pagination from "../components/Pagination";

import { useIngredients } from "../hooks/useIngredients";

import "../styles/app.css";


import logo from "../assets/img/logo2.png"



const Home = () => {
  const { ingredients, loading } = useIngredients();

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentIngredients = ingredients.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    ingredients.length / itemsPerPage
  );

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <img
            src={logo}
            alt="Logo Oke"
            className="hero-logo"
          />

          <h1>
            Bienvenido a <span>Oke</span>
          </h1>

          <h5>
            Usa nuestras herramientas y gestiona a tus pacientes y su informacion
            
          </h5>
        </div>
      </section>

      {/* Ingredientes */}
      <div className="container py-5">
        <h4 className="titIngredientes">
          Ingredientes recomendados
        </h4>

        <IngredientList
          ingredients={currentIngredients}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;