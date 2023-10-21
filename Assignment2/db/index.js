const mongoose = require("mongoose");

// default connection
mongoose.connect("mongodb://127.0.0.1:27017");

// get connection
const db = mongoose.connection;

db.once("open", () => {
  console.log("database connect successfully");
});

// binding to error event
db.on("error", () => {
  console.log("database connect failed");
});


// export module
module.exports = {
    Product: mongoose.model("Product", require("./product")),
    Categories: mongoose.model("Categories", require("./categories")),
};
