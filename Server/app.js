const express = require("express");
const app = express();
require("dotenv").config();
require("./db.connection");
const PORT = process.env.PORT || 9000;
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
var createError = require('http-errors')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", authRouter);

// For 404 errors
app.use(function (req, res, next) {
    if (!req.user) return next(createError(404, 'Page Not Found!!'))
    next()
})

// For other errors
app.use(function(err, req, res, next) {
    // response error page
    res.status(err.status || 500);
    res.send(err);
  });


app.listen(PORT, (err, succ) => {
    if(err){
        console.log("Error: ", err);
    } else {
        console.log(`Server is listening at ${PORT}`);
    }
})