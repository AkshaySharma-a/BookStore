const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// sign-up API
router.post("/sign-up", async (req, res) => {
  try {
    const { userName, email, password, address } = req.body;

    if (!userName || userName.length < 4) {
      return res
        .status(400)
        .json({ message: "User Name must be more than 4 letters" });
    }

    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email === "" || !email.match(emailFormat)) {
      return res.status(400).json({ message: "Enter valid Email" });
    }

    const passwordFormat =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!password.match(passwordFormat)) {
      return res.status(400).json({
        message:
          "Password should be 6-16 characters long and contain at least one number and one special character",
      });
    }
    let existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log(existingUser, "existingUser");

    const hachPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      userName,
      email,
      password: hachPassword,
      address,
    });

    await newUser.save();
    res.status(200).json({ message: "New user is created" });
  } catch (err) {
    res.status(500).json({
      message: `Internal server Error || ${err}`,
    });
  }
});

// sign-in API
router.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required" });
    }

    // Find user by email
    let existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    const authClaims = [
      { name: existingUser.userName },
      { name: existingUser.email },
      { name: existingUser.role },
      { name: existingUser._id },
    ];
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign({ authClaims }, process.env.secKEY, {
        expiresIn: "2d",
      });
      return res.status(200).json({ ...existingUser, token: token });
    }
  } catch (err) {
    return res.status(500).json({ message: `Server Error || ${err.message}` });
  }
});

module.exports = router;
