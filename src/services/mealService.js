// URL base de la API
const API_URL =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

// Función que obtiene los ingredientes
export const getIngredients = async () => {

  // Realiza petición HTTP
  const response = await fetch(API_URL);

  // Convierte respuesta JSON
  const data = await response.json();

  // Retorna ingredientes
  return data.meals;
};
