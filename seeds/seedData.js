const alcoholList = require("./seedAlcohol")
const cocktailList = require("./seedCocktails")
const Alcohol = require("../models/alcoholModel")
const Cocktail = require("../models/cocktailModel")

// console.log(cocktailList[0].method[0])

async function addDataToDB() {
    try {
        console.log("Seeding alcohol...");
        await Alcohol.bulkCreate(alcoholList);

        console.log("alcohol seeded successfully!");

        console.log("Seeding cocktails...");
        await Cocktail.bulkCreate(cocktailList);
        console.log("cocktails seeded successfully!");
    } catch (error) {
        console.error("Error seeding data:", error);
    } 
}

addDataToDB();
