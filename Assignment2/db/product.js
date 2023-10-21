// define data model
const mongoose = require("mongoose");
// create database model
const productSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

module.exports = productSchema;
