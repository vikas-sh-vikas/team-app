import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Name"],
    // unique: true,
  },
  point: {
    type: String,
    required: [true, "Please provide point"],
    // unique: true,
  },
  team: {
    type: String,
    required: [true, "Please provide a team name"],
    // unique: true,
  },
  role: {
    type: String,
    required: [true, "Please provide a role"],
    // unique: true,
  },
});
const Player =
  mongoose.models.players || mongoose.model("players", playerSchema);

export default Player;
