 const express = require("express")
 const cors = require("cors")
 const app = express()
 const mongoose = require("mongoose")
 var bodyParser = require("body-parser")
 const morgan = require("morgan")
 const dotenv = require("dotenv")
 const locationRoute = require("./routes/location")
 const cityRoute = require("./routes/city")
 const districtRoute = require("./routes/district")
 const wardRoute = require("./routes/ward")

dotenv.config()

 //Connect to mongoBD
 mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to mongoDB")
 })

 app.use(bodyParser.json({limit:"50mb"}))
 app.use(cors())
 app.use(morgan("common"))

//Routes
app.use("/api/location", locationRoute)
app.use("/api/city", cityRoute)
app.use("/api/district", districtRoute)
app.use("/api/ward", wardRoute)


 app.listen(8080, () => {
    console.log("Server is running...")
 })