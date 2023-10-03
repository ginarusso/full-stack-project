import React, { useState, useEffect } from "react";
import CocktailHeader from "../components/CocktailHeader"
import AddAlcohol from '../components/AddAlcohol'
import apiConn from "../api/connect"
import videoBG from "../images/bar_banner_vid.mp4";
import '../styles/addCocktail.css'
import DeleteAlcohol from "../components/DeleteAlcohol";
import EditAlcohol from "../components/EditAlcohol";

const initialCocktailImage = "https://cdn.pixabay.com/photo/2013/07/13/11/34/owl-158415_1280.png";

const AlcoholForm = () => {
    const [data, setData] = useState([])
    const [alcoholDeleted, setAlcoholDeleted] = useState(false);
    const [alcoholAdded, setAlcoholAdded] = useState(false); // Step 3
    const [alcoholEdited, setAlcoholEdited] = useState(false);
    // const [editingAlcoholId, setEditingAlcoholId] = useState(null);

    useEffect(() => {
        // getCocktailData()
        getAlcoholData();
      }, []);
    function getAlcoholData(){
        apiConn.get('/alcohol')
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
      }

      function deleteAlcoholById(id) {
        // Check if the id is a valid number
        const alcoholId = parseInt(id);
        if (isNaN(alcoholId)) {
            console.error("Invalid alcohol ID");
            return;
        }

        apiConn
        .delete(`/alcohol/${alcoholId}`)
        .then(res => {
          console.log(`Alcohol with ID ${alcoholId} deleted.`);
          getAlcoholData();
          setAlcoholAdded(false);
          setAlcoholEdited(false);
          setAlcoholDeleted(true)
        //   setEditingAlcoholId(null);
        })
        .catch((error) => {
          console.error(`Error deleting alcohol with ID ${alcoholId}:`, error);
        });
    }

    function editAlcoholById(id, updatedAlcoholData) {
        // Check if the id is a valid number
        const alcoholId = parseInt(id);
        if (isNaN(alcoholId)) {
            console.error("Invalid alcohol ID");
            return;
        }
    
        apiConn
        .put(`/alcohol/${alcoholId}`, updatedAlcoholData) // Use PUT or PATCH method to update data
        .then(res => {
            console.log(`Alcohol with ID ${alcoholId} edited.`);
            getAlcoholData();
            setAlcoholEdited(true);
            setAlcoholAdded(false);
            setAlcoholDeleted(false)
            // setEditingAlcoholId(null);
        })
        .catch((error) => {
            console.error(`Error editing alcohol with ID ${alcoholId}:`, error);
        });
    }


    //   function getAlcoholData(){
    //     apiConn.get('/alcohol')
    
    //     .then(res => {
    //       setData(res.data)
    //       console.log(res.data)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   }
      
      const handleAlcoholAdded = () => {
        setAlcoholAdded(true);
        setAlcoholEdited(false);
        setAlcoholDeleted(false)
        // setEditingAlcoholId(null);
        getAlcoholData();
        console.log("add image")
      };


    return (
    <>
    <div className="video-wrapper">
   <video className="background" src={videoBG} autoPlay loop muted></video>
  </div>
  <h4>List of Alcohols</h4>
  <div className="flex">
  {data.map(alcohol => {
    return (
      <div className="alcohol-list" key={alcohol.id}>
       <p> {alcohol.alcohol_name}  <br />{alcohol.brand} <br />id: {alcohol.id}</p>
      </div>
    );
  })}
</div>

{alcoholAdded && (
                <div className="card">
                    <CocktailHeader
                        title="Your Alcohol Has Been Added"
                        image={initialCocktailImage} // Replace with the URL of your empty bottle image
                    />
                </div>
            )}
                    {alcoholEdited && (
                        <div className="card">
                            <CocktailHeader
                                title="Your Alcohol Has Been Edited"
                                image={initialCocktailImage} // Replace with the URL of your success image
                            />
                        </div>
                    )}
                                {alcoholDeleted && (
                <div className="card">
                    <CocktailHeader
                        title="Your Alcohol Has Been Deleted"
                        image={initialCocktailImage}
                    />
                </div>
            )}
               
                        <AddAlcohol addAlcohols={handleAlcoholAdded} />
                    <div className="delete-alcohol-container">
                        <DeleteAlcohol deleteAlcoholData={deleteAlcoholById} />
                        <EditAlcohol editAlcoholById={editAlcoholById} />
                    </div>
        </>
    );
}


export default AlcoholForm;
  
  
  
  
  
  