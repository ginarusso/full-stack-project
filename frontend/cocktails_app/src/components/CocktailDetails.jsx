import React from "react";

const CocktailDetails = ({ detailedCocktailRecipe }) => {
  return (
    <div className="directions container">
      <p>Difficulty: {detailedCocktailRecipe.difficulty}</p>
      <p>Portion: {detailedCocktailRecipe.portion}</p>
      <p>Time: {detailedCocktailRecipe.time}</p>
      <p>Description: {detailedCocktailRecipe.description}</p>
    </div>
  )
}

export default CocktailDetails

