const express = require('express')
const router = express.Router()

const alcoholController = require("../controllers/alcoholController")

router.get('/', alcoholController.getAllAlcoholNames)
router.get('/:id', alcoholController.getAlcoholByID)
router.post('/', alcoholController.addAlcohol)
router.put('/:id', alcoholController.editAlcohol)
router.delete('/:id', alcoholController.deleteAlcohol)

module.exports = router