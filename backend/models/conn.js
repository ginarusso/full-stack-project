const {Sequelize} = require('sequelize')

const connectToDB = new Sequelize("cocktaildatabase", "gina", "f2K6HQvwFvkqffOHWucPRKkxDTQx4367", {
    host:"dpg-ckdo81djhfbs73cbkhq0-a.oregon-postgres.render.com",
    dialect:"postgres",
    dialectOptions: {
        ssl: true
     }
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

// testConnection()

module.exports = {connectToDB, testConnection}