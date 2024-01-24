import mongoose from "mongoose";

const HabitatsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Habitat = mongoose.model("Habitat", HabitatsSchema);
