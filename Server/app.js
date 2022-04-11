const express = require("express");
const app = express();
const PORT = 9000;
const userRouter = require("./controller/user");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);





app.listen(PORT, (err, succ) => {
    if(err){
        console.log("Error: ", err);
    } else {
        console.log(`Server is listening at ${PORT}`);
    }
})