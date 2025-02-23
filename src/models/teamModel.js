import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Name"],
    // unique: true,
  },
  shortCode: {
    type: String,
    required: [true, "Please provide short code"],
    // unique: true,
  },
});
const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
