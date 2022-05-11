const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/dbranti");

  mongoose.connection.once("open", () => {
    console.log("Database successfully connected!");
  });
  mongoose.connection.on("error", () => {
    console.log("Something went wrong!");
  });
}

module.exports = { connect };
