const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is running on port ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Error in connection with MongoDB");
  }
};
module.exports = connectToDB;
