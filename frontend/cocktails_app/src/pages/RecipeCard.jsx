import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import CocktailHeader from "../components/CocktailHeader"; 
import IngredientsList from "../components/IngredientsList";
import CocktailDetails from "../components/CocktailDetails";
import CocktailMethod from "../components/CocktailMethod";
import videoBG from "../images/bar_banner_vid.mp4";
import apiConn from "../api/connect"
import DeleteCocktail from "../components/DeleteCocktail";
import EditCocktail from "../components/EditCocktail";

const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png";
const emptyCocktailGlassImage = "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg";
  
const RecipeCard = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showInitialImage, setShowInitialImage] = useState(true);
  const [noResultsFound, setNoResultsFound] = useState(false);
//   const [visibleSpirit, setVisibleSpirit] = useState(null);
  const [data, setData] = useState([])
  const [searchMade, setSearchMade] = useState(false);
  const [cocktailDeleted, setCocktailDeleted] = useState(false);
  const [cocktailEdited, setCocktailEdited] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
//   const [deleteSuccess, setDeleteSuccess] = useState(false)


  useEffect(() => {
    console.log(apiConn)
    getCocktailData()
  }, []);

  function resetEditSuccess() {
    setEditSuccess(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search triggered!")
    setSearchMade(true);

    // Clean the search input
    const cleanSearchInput = searchInput.trim().toLowerCase();


    // Helper function to check if a string contains the search term as a whole word (without this if you search for gin, anything with ginger is also returned)
function containsWholeWord(text, word) {
    const wordPattern = new RegExp(`\\b${word}\\b`, 'i');
    return wordPattern.test(text);
  }
  
// Search logic
const results = data.filter((recipe) => {
    const ingredientsArray = Array.isArray(recipe.ingredients)
      ? recipe.ingredients
      : [];

    return (
      ingredientsArray.some((ingredient) =>
        containsWholeWord(ingredient.toLowerCase(), cleanSearchInput)
      ) ||
      containsWholeWord(recipe.cocktail_name.toLowerCase(), cleanSearchInput)
    );
  });

  setSearchResults(results);
  console.log("Search results:", results);
  setNoResultsFound(results.length === 0);
  setShowInitialImage(results.length === 0);
  setCocktailEdited(false);
  setCocktailDeleted(false);
//   setShowInitialImage(false);
  setSearchInput('');
};

function getCocktailData() {
  apiConn.get('/cocktail')
    .then(res => {
      console.log('Success:', res.data);
      setData(res.data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

  function deleteCocktailData(id) {
    apiConn
    .delete(`/cocktail/${id}`)
    .then(res => {
      console.log(`Cocktail with ID ${id} deleted.`);
      getCocktailData()
      setCocktailDeleted(true);
      setSearchResults([]);
    })
    .catch((error) => {
      console.error(`Error deleting cocktail with ID ${id}:`, error);
    });
  }

  function editCocktail(id, info) {
    apiConn.put(`/cocktail/${id}`, info)
    .then(res => {
        console.log("Edit response: ",res)
        getCocktailData()
        // setCocktailEdited(true);
        setEditSuccess(true);
        setSearchResults([]);
        setTimeout(resetEditSuccess, 3000);
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <>
        {/* {data.map(cocktail => {
      return  <div>{cocktail.category}</div>
    })} */}

   <div className="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
  </div>
    <div className="container">
      <div className="search-form">
        <form onSubmit={handleSearch}>

<div className="flexSearch">
    <label>Search by cocktail name, liquor, or ingredient</label>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="What are you looking for?"
            required
            />
          <button type="submit">Search</button>
</div>
        </form>
      </div>

      {showInitialImage && !searchMade && ( // Only show the initial image if search has not been made
          <div className="card">
            <CocktailHeader title="Cocktails" image={initialCocktailImage} />
          </div>
        )}
        {noResultsFound && searchMade && ( // Show no results message if search was made
          <div className="card">
            <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
          </div>
        )}

        {searchResults.length > 0 && ( // Only display recipes if search results are available
          <div>
            {searchResults.map(recipe => (
              <div className="card" key={recipe.id}>
                <CocktailHeader title={recipe.cocktail_name} image={recipe.image_url} />
                <p>Cocktail ID: {recipe.id}</p>
                <IngredientsList ingredients={recipe.ingredients} />
                <CocktailDetails detailedCocktailRecipe={recipe} />
                <CocktailMethod method={recipe.method} />
                <DeleteCocktail id={recipe.id} deleteCocktailData={deleteCocktailData} setSearchResults={setSearchResults} />
                <EditCocktail editCocktail={editCocktail} id={recipe.id} currentCocktail={recipe}/>

              </div>
            ))}
          </div>
        )}
      {editSuccess && ( // Display edit success message when editSuccess is true
        <div className="card">
          <CocktailHeader
            title="Your Cocktail Has Been Edited"
            image={initialCocktailImage}
          />
        </div>
      )}
      {searchResults.length === 0 && searchMade && !noResultsFound && !cocktailDeleted && !editSuccess && (

  <div className="card">
    <CocktailHeader title="Your Cocktail Was Not Found" image={emptyCocktailGlassImage} />
  </div>
)}
      {/* {cocktailEdited && (
        <div className="card">
          <CocktailHeader title="Your Cocktail Has Been Edited" image={initialCocktailImage} />
        </div>
      )} */}
      {/* Display "Your Cocktail Was Deleted" message and the empty cocktail glass image */}
      {cocktailDeleted && searchResults.length === 0 && !cocktailEdited && (
        <div className="card">
          <CocktailHeader title="Your Cocktail Has Been Deleted" image={emptyCocktailGlassImage} />
        </div>
      )}

      </div>
    </>
  );
}

export default RecipeCard;
