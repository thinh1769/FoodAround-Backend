 const express = require("express");
 const cors = require("cors");
 const app = express();
 const mongoose = require("mongoose");
 var bodyParser = require("body-parser");
 const morgan = require("morgan");
 const dotenv = require("dotenv");

 app.listen(8080, () => {
    console.log("Server is running...");
 });