import React, {useState} from 'react'
import '../styles/addCocktail.css'

const EditAlcohol = ({editAlcoholById}) => {
    const [alcohol, setAlcohol] = useState({
        id: "",
        alcohol_name: "",
        brand: ""
    })

function handleSubmit(e) {
    e.preventDefault()
    editAlcoholById(alcohol.id, alcohol)
    console.log(alcohol)

    setAlcohol({
        id: "",
        alcohol_name: "",
        brand: ""
    })
}

  return (
    <>
<h2>Edit Alcohol</h2>

    <form onSubmit={handleSubmit}> 

    <input type="number"
    placeholder="ID"
    value={alcohol.id}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, id: e.target.value}
        })
    }}
    />

    <input type="text"
    placeholder="Name"
    value={alcohol.alcohol_name}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, alcohol_name: e.target.value}
        })
    }}
    />
    <input type="text"
    placeholder="Brand"
    value={alcohol.brand}
    onChange={e => {
        setAlcohol (previousAlcohol => {
            return {...previousAlcohol, brand: e.target.value}
        })
    }}
    />
<button>Edit Alcohol</button>
    </form>
    </>
  )
}

export default EditAlcohol