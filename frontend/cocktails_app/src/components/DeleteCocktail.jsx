// import React, {useState, useEffect} from 'react'
import React from 'react'
// import { useNavigate } from 'react-router-dom';

const DeleteCocktail = ({id, deleteCocktailData, setSearchResults}) => {
    // const navigate = useNavigate()
    
    function handleDelete() {
        deleteCocktailData(id)
        setSearchResults([])
      }

      return (
        <>
        
        <button onClick={handleDelete}>Delete Cocktail</button>
        </>
      );
    };

export default DeleteCocktail
