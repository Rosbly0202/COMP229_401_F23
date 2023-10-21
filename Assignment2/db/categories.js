// define data model
const mongoose = require("mongoose");
// create database model
const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = categoriesSchema;
