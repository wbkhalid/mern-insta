import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log(error, "DB error");
  }
};

export default DBConnect;
