/**
 * App.js
 *
 * This file creates an express application naed as app.
 * Student Name: Fanchu di
 * Student ID: 301090064
 * Date: 2023-9-27
 */

var createError = require("http-errors");
var express = require("express");
var path = require("path");

 
// import router
var indexRouter = require("./routes/index");
var homeRouter = require("./routes/homepage");
var aboutmeRouter = require("./routes/aboutme");
var projectsRouter = require("./routes/projects");
var servicesRouter = require("./routes/services");
var contactMeRouter = require("./routes/contactMe");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views/partials"));
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// use router
app.use("/", homeRouter);
app.use("/homepage", homeRouter);
app.use("/aboutme", aboutmeRouter);
app.use("/projects", projectsRouter);
app.use("/services", servicesRouter);
app.use("/contactMe", contactMeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
