const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  points: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Claim", ClaimSchema);
