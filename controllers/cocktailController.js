const Cocktail = require("../models/cocktailModel")

async function getAllCocktailNames(req, res) {
    try {

        const results = await Cocktail.findAll()
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getCocktailByID(req, res) {
    try {
        const cocktailID = await Cocktail.findByPk(req.params.id);
        if (!cocktailID) {
            return res.status(404).json({ message: "Cocktail not found" });
        }
        res.status(200).json(cocktailID);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// cocktails table: id, cocktail_name, difficulty, image_url, portion, time, description, ingredients[], method[], category, alcohol_id

async function addCocktail(req, res) {
    try {
        // Destructure the request body
        const {
            cocktail_name,
            difficulty,
            image_url,
            portion,
            time,
            description,
            ingredients,
            method,
            category,
            alcohol_id
        } = req.body;

        if (
            !cocktail_name ||
            !difficulty ||
            !image_url ||
            !portion ||
            !time ||
            !description ||
            !ingredients ||
            !method ||
            !category ||
            !alcohol_id
        ) {
            return res.status(400).json({ message: "The cocktail is missing some properties." });
        }

        // Additional validation for ingredients and method (ensure they are valid JSON arrays)
        if (!Array.isArray(ingredients) || !Array.isArray(method)) {
            return res.status(400).json({ message: "Ingredients and method must be valid JSON arrays." });
        }

        // Create the new cocktail
        const newCocktail = await Cocktail.create({
            cocktail_name,
            difficulty,
            image_url,
            portion,
            time,
            description,
            ingredients,
            method,
            category,
            alcohol_id
        });

        res.status(201).json(newCocktail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {getAllCocktailNames, getCocktailByID, addCocktail}