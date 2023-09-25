function getAllCocktailNames(req, res) {
    res.json("pinged the cocktail route")   
}

function getCocktailByID(req, res) {
    res.json("pinged the cocktail ID route")   
}

module.exports = {getAllCocktailNames, getCocktailByID}