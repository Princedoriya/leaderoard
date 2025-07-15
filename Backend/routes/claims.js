const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Claim = require("../models/claim");

// Claim random points for a user
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Generate random points between 1 and 10
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    // Update user's total points
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: randomPoints } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Save to claim history
    const claim = new Claim({
      userId: user._id,
      points: randomPoints
    });

    await claim.save();

    res.status(200).json({
      message: "Points claimed successfully!",
      user,
      pointsClaimed: randomPoints
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Optional: Get all claim history
router.get("/", async (req, res) => {
  try {
    const history = await Claim.find().populate("userId", "name").sort({ timestamp: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch claim history" });
  }
});

module.exports = router;
