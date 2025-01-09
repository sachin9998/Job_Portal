import mongoose from "mongoose";

// Local MongoDB URL
const MONGODB_URI = "mongodb://localhost:27017/jobportal";

// Online Database URL
// const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);

    console.log(
      `\n MongoDB Connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
