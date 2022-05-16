const mongoose = require("mongoose");

function connect() {
  mongoose.connect(
    `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0-shard-00-00.jvbf1.mongodb.net:27017,cluster0-shard-00-01.jvbf1.mongodb.net:27017,cluster0-shard-00-02.jvbf1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-a8rtxc-shard-0&authSource=admin&retryWrites=true&w=majority`
  );

  mongoose.connection.once("open", () => {
    console.log("Database successfully connected!");
  });
  mongoose.connection.on("error", () => {
    console.log("Something went wrong!");
  });
}

module.exports = { connect };
