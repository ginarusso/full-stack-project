import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// import Home from '../pages/Home'
import AlcoholForm from '../pages/AlcoholForm'
import CocktailForm from '../pages/CocktailForm'
import PageNotFound from "../pages/PageNotFound";
import RecipeCard from '../pages/RecipeCard'
import '../styles/styles.css'

const App = () => {
  return (
    <>
    <nav>
    <ul className="nav-ul">
      <li className="nav-li"><Link to='/'>Recipes</Link></li>
      <li className="nav-li"><Link to='/alcohol'>Add an Alcohol Name</Link></li>
      <li className="nav-li"><Link to='/cocktail'>Add a Cocktail Recipe</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path='/' element={<RecipeCard />}/>
    <Route path='/alcohol' element={<AlcoholForm />} />
    {/* <Route path='/alcohol/:id' element={<AlcoholForm />} /> */}
    <Route path='/cocktail' element={<CocktailForm />}/>
    <Route path='*' element={<PageNotFound />}/>
  </Routes>
  </>
  )
}

export default App