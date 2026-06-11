import { useState } from "react";

import IngredientList from "../components/IngredientList";
import Pagination from "../components/Pagination";

import { useIngredients } from "../hooks/useIngredients";

const Home = () => {

  const {
    ingredients,
    loading,
  } = useIngredients();

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 12;

  const lastIndex =
    currentPage * itemsPerPage;

  const firstIndex =
    lastIndex - itemsPerPage;

  const currentIngredients =
    ingredients.slice(
      firstIndex,
      lastIndex
    );

  const totalPages =
    Math.ceil(
      ingredients.length /
      itemsPerPage
    );

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (

    <div>

      <h2>
        Ingredientes recomendados
      </h2>

      <IngredientList
        ingredients={currentIngredients}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
};

export default Home;