/**
 * aboutme.js
 *
 * This is a router file for about me page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */
var express = require("express");
var router = express.Router();

/* GET Aboutme page. */
router.get("/", function (req, res, next) {
  res.render("aboutme", {
    title: "Aboutme",
  });
});

module.exports = router;
