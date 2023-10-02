/**
 * contactMe.js
 *
 * This is a router file for contact me page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */
var express = require("express");
var router = express.Router();

/* GET Contact Me page. */
router.get("/", function (req, res, next) {
  res.render("contactMe", {
    title: "Contact Me",
  });
});

module.exports = router;
