const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register User
router.post("/register", async (req, res) => {
     try {
         const salt = await bcrypt.genSalt(10);
         const hashpassword = await bcrypt.hash(req.body.password, salt);
         const newUser = new User({
             username: req.body.username,
             email: req.body.email,
             password: hashpassword
         });

         const user = await newUser.save();
         res.status(200).json(user);
     } catch (err) {
         res.status(500).json(err);
     }
});



module.exports = router;