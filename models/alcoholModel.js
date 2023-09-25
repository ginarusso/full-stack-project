// cocktails table: id, cocktail_name, difficulty, image_url, portion, time, description, ingredients[], method[], category, alcohol_id
// alcohol table: id, alcohol_name, brand

const { DataTypes } = require("sequelize");
const { connectToDB } = require("./conn");

const Alcohol = connectToDB.define("alcohol", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alcohol_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    timestamps: false,
});

module.exports = Alcohol;