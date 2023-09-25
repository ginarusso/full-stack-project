const Alcohol = require("../models/alcoholModel")

async function getAllAlcoholNames(req, res) {
    try {
        const results = await Alcohol.findAll()
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getAlcoholByID(req, res) {
    try {
        const alcoholID = await Alcohol.findByPk(req.params.id);
        if (!alcoholID) {
            return res.status(404).json({ message: "Alcohol not found." });
        }
        res.status(200).json(alcoholID);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function addAlcohol(req, res) {
    try {
        const alcohol = req.body;
        if (alcohol.alcohol_name === null || alcohol.brand === null) {
            res.status(400).json({ message: "The alcohol is missing some properties." });
        } else {
            const newAlcohol = await Alcohol.create(alcohol)
            res.status(201).json(newAlcohol)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function editAlcohol(req,res){
    const {alcohol_name, brand} = req.body;
    const alcoholID = req.params.id
    if (alcoholID === null || alcohol_name === null || brand === null) {
      res.status(400).json({message: "The alcohol that you are trying to edit is missing some properties."})
    } else {
      Alcohol.update({alcohol_name, brand}, {where: {id: alcoholID} })
      .then(response => {
        if (response[0] === 0) {
          res.status(404).json({message: "The id you have requested is not in the database."})
        } else {
          console.log(response)
          res.status(200).json({message: "The alcohol has been edited"})
        }
      })
      .catch(error => {
        res.status(500).json({message: error})
      })
    }}

async function deleteAlcohol(req, res) {
    const alcoholID = req.params.id
    Alcohol.destroy({where: {id:alcoholID}})
    .then(response => {
        if (response === 0) {
            res.status(404).json({message:"The alcohol with the requested ID is not in the database."})
        } else {
            res.status(200).json({message: "The alcohol has been deleted."})
        }
    })
    .catch (error => {
        res.status(500).json({message: error})
    })
}

module.exports = {getAllAlcoholNames, getAlcoholByID, addAlcohol, editAlcohol, deleteAlcohol}