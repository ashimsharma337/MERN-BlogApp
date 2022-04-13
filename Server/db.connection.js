const mongoose = require("mongoose");
require("dotenv").config();
const DataBase = process.env.DB_URL;

mongoose.connect(DataBase)
.then((success) => {
    console.log("Database connection Successfull");
})
.catch((error) => {
    console.log("Error while connecting database: ", error);
})