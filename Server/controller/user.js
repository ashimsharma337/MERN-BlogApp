const router = require("express").Router();


router.get("/users", (req, res, next) => {
      res.json({
          data: null,
          status: 200,
          msg: "Users List"
      });
});

router.post("/users", (req, res, next) => {
    res.json({
        data: req.body,
        status: 200,
        msg: "Users List"
    });
})

module.exports = router;