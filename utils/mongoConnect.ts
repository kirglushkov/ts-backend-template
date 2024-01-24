import mongoose from "mongoose";

export const mongooseConnect = async () => {
  mongoose.set('strictQuery', true)
  await mongoose.connect(process?.env?.MONGODB_URL || "");

  return true;
};
