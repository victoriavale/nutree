import IngredientCard from "./IngredientCard";

const IngredientList = ({ ingredients }) => {

  return (

    <div className="grid">

      {ingredients.map((ingredient) => (

        <IngredientCard
          key={ingredient.idIngredient}
          ingredient={ingredient}
        />

      ))}

    </div>
  );
};

export default IngredientList;