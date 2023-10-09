import React from 'react'

const DeleteCocktail = ({id, deleteCocktailData, setSearchResults}) => {
    function handleDelete() {
        deleteCocktailData(id)
        setSearchResults([])
      }
      return (
        <>
        <button onClick={handleDelete}>Delete Cocktail</button>
        </>
      )
    }

export default DeleteCocktail
