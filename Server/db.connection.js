const mongoose = require("mongoose");
require("dotenv").config();
const DataBase = "Your mongo atlas url";

mongoose.connect(DataBase)
.then((success) => {
    console.log("Database connection Successfull");
})
.catch((error) => {
    console.log("Error while connecting database: ", error);
})