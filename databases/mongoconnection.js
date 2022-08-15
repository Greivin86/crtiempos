import mongoose from "mongoose";
import { MONGODB_URI } from "./dbconfig.js";

export const connectMongoDB = async () => {
  try {
    const mongodb = await mongoose.connect(MONGODB_URI);
      console.log("Mongodb is connected to", mongodb.connection.host);
  } catch (error) {
    console.error(error);
  }
};
