const { connectToDB } = require("../models/conn");
const Cocktail = require("../models/cocktailModel");
const Alcohol = require("../models/alcoholModel");

async function initializeDB() {
  try {
    await Cocktail.drop();
    await Alcohol.drop();
    await Alcohol.sync();
    await Cocktail.sync();

    console.log("The tables were successfully created");
    return true;
  } catch (error) {
    console.error("the tables were not created, the error is: ", error);
    return false;
  }
}

initializeDB();
