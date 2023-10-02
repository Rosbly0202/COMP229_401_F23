/**
 * projects.js
 *
 * This is a router file for projects page
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */
var express = require("express");
var router = express.Router();

/* GET Projects page. */
router.get("/", function (req, res, next) {
  res.render("projects", {
    title: "Projects",
  });
});

module.exports = router;
