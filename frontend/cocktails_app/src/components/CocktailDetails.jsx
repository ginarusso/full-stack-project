// import React from "react";

// const CocktailDetails = ({ difficulty, portion, time, description }) => {
 
//     return (
//     <div className="directions container">
//       <p>Difficulty: {difficulty}</p>
//       <p>Portion: {portion}</p>
//       <p>Time: {time}</p>
//       <p>Description: {description}</p>
//     </div>
//   );
// }

// export default CocktailDetails;
import React from "react";

const CocktailDetails = ({ detailedCocktailRecipe }) => {
  // if (!detailedCocktailRecipe) {
  //   return <div className="directions container">No details available.</div>;
  // }

  return (
    <div className="directions container">
      <p>Difficulty: {detailedCocktailRecipe.difficulty}</p>
      <p>Portion: {detailedCocktailRecipe.portion}</p>
      <p>Time: {detailedCocktailRecipe.time}</p>
      <p>Description: {detailedCocktailRecipe.description}</p>
    </div>
  );
}

export default CocktailDetails;

