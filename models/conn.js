const {Sequelize} = require('sequelize')

const connectToDB = new Sequelize("cocktaildatabase", "postgres", "Password1234", {
    host:"localhost",
    dialect:"postgres"
})

async function testConnection() {
    try {
        await connectToDB.authenticate()
        console.log("Successfully connected to the database.")
        return true
    } catch (error) {
        console.log("error: ", error)
        return false
    }
}

module.exports = {connectToDB, testConnection}