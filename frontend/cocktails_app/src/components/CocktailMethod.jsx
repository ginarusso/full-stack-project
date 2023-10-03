import React from "react";

const CocktailMethod = ({ method }) => {
  return (
    <div className="method">
      <h4>Directions</h4>
      <ol>
      {/* Object.values(stepObj)[0] extracts the value associated with the first key (there's only one) in the stepObj object. This value is the description of a step. */}
        {method.map((stepObj, index) => {
          const stepDescription = Object.values(stepObj);
          return <li key={index}>{stepDescription}</li>;
        })}
      </ol>
    </div>
  );
};

export default CocktailMethod;

