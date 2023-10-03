// database with alcohol and cocktail tables

// database => cocktaildatabase

// cocktails table: id, cocktail_name, difficulty, image_url, portion, time, description, ingredients[], method[], category, alcohol_id
// alcohol table: id, alcohol_name, brand

// https://www.barschool.net/us/blog/cocktails-101-history-and-types

// short, highball, blended, hot, specialty, shooter, healthy, smoothies, non-alcoholic

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json());

const cocktailRoutes = require('./routers/cocktailRoutes')
const alcoholRoutes = require('./routers/alcoholRoutes')

const {testConnection} = require('./models/conn')
testConnection()

app.get('/', (req, res) => {
    res.status(200).json("home route")
})

app.use('/cocktail', cocktailRoutes)
app.use('/alcohol', alcoholRoutes)

app.listen(port, ()=> {
    console.log("My server is working")
})