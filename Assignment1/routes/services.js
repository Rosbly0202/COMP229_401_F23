/**
 * services.js
 *
 * This is a router file for services page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */

var express = require("express");
var router = express.Router();

/* GET Services page. */
router.get("/", function (req, res, next) {
  res.render("services", {
    title: "Services",
  });
});

module.exports = router;
