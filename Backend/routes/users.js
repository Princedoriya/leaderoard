const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

// Add new user
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Failed to save user" });
  }
});


module.exports = router; 
