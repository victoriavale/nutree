const IngredientCard = ({ ingredient }) => {

  // Construcción dinámica de imagen
  const imageUrl =
    `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;

  return (

    <div className="card">

      <img
        src={imageUrl}
        alt={ingredient.strIngredient}
      />

      <h3>
        {ingredient.strIngredient}
      </h3>

    </div>
  );
};

export default IngredientCard;