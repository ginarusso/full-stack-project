const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")
const Alcohol = require('./alcoholModel')

const Cocktail = connectToDB.define("cocktail", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cocktail_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    difficulty: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    portion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    time: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },

    ingredients: {
        type: DataTypes.JSON,
        allowNull: false,
    },

    method: {
        type: DataTypes.JSON,
        allowNull: false,
    },

    category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    alcohol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
         model: "alcohol",
         key: "id"
        }
    }
}, {
    timestamps: false
})

Cocktail.belongsTo(Alcohol, {
    foreignKey: "alcohol_id"
})

module.exports = Cocktail