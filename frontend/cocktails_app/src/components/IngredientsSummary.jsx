import React from "react";

const IngredientsSummary = ({ allIngredients, initialIngredients }) => {
  return (
    <div className="ingredients-summary">
      <h4>All Ingredients</h4>
      <ul>
        {initialIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Additional Ingredients</h4>
      <ul>
        {allIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsSummary;
