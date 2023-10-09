import React from "react"

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientsList
