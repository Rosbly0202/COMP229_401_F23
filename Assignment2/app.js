const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser')
var homeRouter = require("./routes/homepage");
var productsRouter = require("./routes/products");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db");


// use router
app.use("/", homeRouter);
app.use("/api/products", productsRouter);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})