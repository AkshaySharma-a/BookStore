const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const authenticateToken = require("../middleware/auth");

router.get("/userinfo", authenticateToken, async (req, res) => {
  try {
    // Extract user ID from req.user (set by authenticateToken)
    const { id } = req.headers;

    // Find user by ID
    const data = await User.findById(id).select("-password");

    // If user does not exist, return 404
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: `Server Error || ${err.message}` });
  }
});

router.put("/updateinfo", authenticateToken, async (req, res) => {
  try {
    // Extract user ID from req.user (set by authenticateToken)
    const { id } = req.headers;
    const { userName, email, password, address, avater } = req.body;
    const updateFields = {};

    const hachPassword = await bcrypt.hash(password, 10);

    if (email) updateFields.email = email;
    if (avater) updateFields.avater = avater;
    if (address) updateFields.address = address;
    if (userName) updateFields.userName = userName;
    if (password) updateFields.password = hachPassword;

    await User.findByIdAndUpdate(id, updateFields);
    return res.status(200).json({ message: "Data is seccessfully updated" });
  } catch (err) {
    return res.status(500).json({ message: `Server Error || ${err.message}` });
  }
});

module.exports = router;
