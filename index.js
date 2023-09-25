// database with alcohol and cocktail tables

// database => cocktaildb

// cocktails table: id, cocktail_name, difficulty, image_url, portion, time, description, ingredients[], method[], category, alcohol_id
// alcohol table: id, alcohol_name, brand

// https://www.barschool.net/us/blog/cocktails-101-history-and-types

// short, highball, blended, hot, tiki/specialty, shooter, healthy, smoothies, non-alcoholic

const express = require('express')
const app = express()
const port = 3000

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