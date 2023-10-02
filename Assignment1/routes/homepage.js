/**
 * homepage.js
 *
 * This is a router file for homepage page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */
var express = require("express");
var router = express.Router();

/* GET Homepage page. */
router.get("/", function (req, res, next) {
  res.render("homepage", {
    title: "Homepage",
  });
});

module.exports = router;
