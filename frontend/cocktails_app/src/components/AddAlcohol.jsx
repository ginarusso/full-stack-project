import React, {useState} from 'react'
import apiConn from "../api/connect"

const AddAlcohol = ({addAlcohols}) => {
    const [alcohol, setAlcohol] = useState({
        alcohol_name: "",
        brand: ""
    })

function  handleName(e) {
    setAlcohol((previousAlcohol) => {
        return {...previousAlcohol, alcohol_name: e.target.value}
    })
}

async function handleOnSubmit(e) {
    e.preventDefault()
        apiConn.post('/alcohol', alcohol)
        .then(res => {
            console.log(res)
            if (res.status === 201) {
                console.log("Calling addAlcohols")
                addAlcohols(); // Call the callback to trigger the message display
            }
        })
        .catch(error => {
            console.log(error)
        })
    setAlcohol({
        alcohol_name: "",
        brand: ""
    })
}

return (
    <>
    <h2>Add an Alcohol</h2>
    <form onSubmit={handleOnSubmit}>
        <input type="text"
        placeholder="Alcohol Name"
        value={alcohol.alcohol_name}
        onChange={handleName}
        required />
        <input type="text"
        placeholder="Brand"
        value={alcohol.brand}
        onChange={e => {
            setAlcohol(previousAlcohol => {
                return {...previousAlcohol, brand: e.target.value}
            })
        }}
        required />
        <button>Add Alcohol</button>
    </form>
    </>
    )
}

export default AddAlcohol





