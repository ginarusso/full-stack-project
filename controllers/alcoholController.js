function getAllAlcoholNames(req, res) {
    res.json("pinged the alcohol route")   
}

function getAlcoholByID(req, res) {
    res.json("pinged the alcohol ID route")   
}

module.exports = {getAllAlcoholNames, getAlcoholByID}