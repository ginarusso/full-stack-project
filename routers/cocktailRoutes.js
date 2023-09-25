const express = require('express')
const router = express.Router()

const cocktailController = require("../controllers/cocktailController")

router.get('/', cocktailController.getAllCocktailNames)
router.get('/:id', cocktailController.getCocktailByID)
router.post('/', cocktailController.addCocktail)
router.put('/:id', cocktailController.editCocktail)
router.delete('/:id', cocktailController.deleteCocktail)

module.exports = router