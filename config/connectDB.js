const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error('Connection URI:', process.env.MONGO_URI);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
