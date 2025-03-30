import mongoose from "mongoose";
const connectDB = function () {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected");
  });
};

export default connectDB;
