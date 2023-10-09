import React, { useState, useEffect } from "react"
import AddCocktail from '../components/AddCocktail'
import apiConn from "../api/connect"
import CocktailHeader from "../components/CocktailHeader"
import videoBG from "../images/bar_banner_vid.mp4"
import '../styles/addCocktail.css'

const initialCocktailImage = "https://cdn.pixabay.com/photo/2014/03/24/17/07/pineapple-juice-295078_1280.png"

const CocktailForm = () => {
    const [data, setData] = useState([])
    const [cocktailAdded, setCocktailAdded] = useState(false)
    const [alcoholArr, setAlcoholArr] = useState([])

    useEffect(() => {
        getCocktailData()
        getAlcoholData()
      }, [])

    function getCocktailData(){
        apiConn.get('/cocktail')
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      function getAlcoholData() {
        apiConn.get('/alcohol')
          .then(res => {
            setAlcoholArr(res.data);
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      }

      const handleCocktailAdded = () => {
        setCocktailAdded(true);
        console.log("add image")
      };

    return (
    <>

<div className="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
  </div>

<h4>List of Alcohols</h4>
<div className="flex">
{alcoholArr.map(alcohol => (
  <div key={alcohol.id} className="alcohol-list">
    {alcohol.alcohol_name} id: {alcohol.id}
  </div>
))}
</div>

{cocktailAdded && (
          <div className="card">
            <CocktailHeader title="Your Cocktail Has Been Added" image={initialCocktailImage} />
          </div>
        )}
        <AddCocktail addCocktails={handleCocktailAdded} />
      </>
  )
}

export default CocktailForm