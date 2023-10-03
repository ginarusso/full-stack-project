import React, {useState} from 'react'
import apiConn from "../api/connect"

const AddCocktail = ({addCocktails}) => {
    const [cocktail, setCocktail] = useState({
        cocktail_name: "",
        difficulty: "",
        portion: "",
        time: "",
        description: "",
        category: "",
        ingredients: [],
        method: [],
        image_url: "",
        alcohol_id: ""
    })

    const handleArrayChange = (e, fieldName) => {
        const newArray = e.target.value.split('\n');
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          [fieldName]: newArray,
        }));
      };

function  handleName(e) {
    setCocktail((previousCocktail) => {
        return {...previousCocktail, cocktail_name: e.target.value}
    })
}

async function handleOnSubmit(e) {
    e.preventDefault()
    console.log("handleOnSubmit executed")
        apiConn.post('/cocktail', cocktail)
        .then(res => {
            console.log(res)
            if (res.status === 201) {
                console.log("Calling addCocktails")
                addCocktails(); // Call the callback to trigger the message display
            }
        })
        .catch(error => {
            console.log(error)
        })
    setCocktail({
        cocktail_name: "",
        difficulty: "",
        portion: "",
        time: "",
        description: "",
        category: "",
        ingredients: [],
        method: [],
        image_url: "",
        alcohol_id: ""
    })
}

return (
    <>
    <h2>Add a Cocktail</h2>
    <form onSubmit={handleOnSubmit} className="form-grid">
  <div className="form-item">
    <label>Cocktail Name:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="Cocktail Name"
      value={cocktail.cocktail_name}
      onChange={handleName}
      required
    />
  </div>
  <div className="form-item">
    <label>Difficulty:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="Easy, Advanced"
      value={cocktail.difficulty}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          difficulty: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Portion:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="serves how many? (serves 2)"
      value={cocktail.portion}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          portion: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Time:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="How long? (5 mins.)"
      value={cocktail.time}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          time: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Description:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="Description"
      value={cocktail.description}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          description: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Category (Martini, Daiquiri, Margarita, etc.):</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="Category"
      value={cocktail.category}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          category: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Image URL:</label>
    <input className="addCocktailForm"
      type="text"
      placeholder="http://"
      value={cocktail.image_url}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          image_url: e.target.value,
        }));
      }}
      required
    />
  </div>
  <div className="form-item">
    <label>Alcohol ID:</label>
    <input className="addCocktailForm"
      type="number"
      placeholder="Alcohol ID# (refer to list above)"
      value={cocktail.alcohol_id}
      onChange={(e) => {
        setCocktail((previousCocktail) => ({
          ...previousCocktail,
          alcohol_id: e.target.value,
        }));
      }}
      required
    />
  </div>

{/* separate textarea input fields for ingredients and method, allowing you to enter multiple items separated by newlines. The handleArrayChange function splits the input by newlines and updates the corresponding array in the cocktail state. */}
<div className="form-item">
<label>Ingredients:</label>
<textarea rows="4"         
          name="ingredients"
          placeholder="Ingredients (one per line)"
          value={cocktail.ingredients.join('\n')}
          onChange={(e) => handleArrayChange(e, 'ingredients')}
          required
        />
</div>
<div className="form-item">
        <label>Directions:</label>
        <textarea rows="4"  
          name="method"
          placeholder="Directions (one step per line)"
          value={cocktail.method.join('\n')}
          onChange={(e) => handleArrayChange(e, 'method')}
          required
        />
    </div>
        {/* need to be able to add several methods (unlimited steps) */}



  <button type="submit">Add Cocktail</button>
</form>

    </>
    )
}

export default AddCocktail