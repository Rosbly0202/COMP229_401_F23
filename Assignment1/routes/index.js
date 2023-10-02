/**
 * index.js
 *
 * This is a router file for index page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */
var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Login" });
});
module.exports = router;
