const express = require('express')
const router = express.Router()

const cocktailController = require("../controllers/cocktailController")

router.get('/', cocktailController.getAllCocktailNames)
router.get('/:id', cocktailController.getCocktailByID)

module.exports = router