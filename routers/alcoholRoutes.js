const express = require('express')
const router = express.Router()

const alcoholController = require("../controllers/alcoholController")

router.get('/', alcoholController.getAllAlcoholNames)
router.get('/:id', alcoholController.getAlcoholByID)

module.exports = router