import { useEffect } from "react";
import { useState } from "react";
import { getIngredients } from "../services/mealService";

export const useIngredients = () => {

  // Lista de ingredientes
  const [ingredients, setIngredients] = useState([]);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const data = await getIngredients();

        setIngredients(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchData();

  }, []);

  return {
    ingredients,
    loading,
  };
};