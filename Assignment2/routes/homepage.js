var express = require("express");
var router = express.Router();

/* GET Homepage page. */
router.get("/", function (req, res, next) {
  res.json({"message":"Welcome to DressStore application."})
});

module.exports = router;
