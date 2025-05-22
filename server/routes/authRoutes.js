// https://www.geeksforgeeks.org/json-web-token-jwt/

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../models");
const { authenticateToken, isOwner } = require("../middleware/authMiddleware");
const { sequelize } = require("../models");

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for email:', email);

    // Debug JWT secret
    console.log('JWT Secret available:', !!process.env.JWT_SECRET);
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set in environment variables');
      return res.status(500).json({ message: "Server configuration error" });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    console.log('User query result:', user ? 'User found' : 'User not found');
    
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log('Password validation result:', isValidPassword);
    
    if (!isValidPassword) {
      console.log('Invalid password for user:', email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.UserId, email: user.email, isOwner: user.isOwner },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log('Login successful for user:', email);
    res.json({ token, isOwner: user.isOwner });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Register route - Only accessible by owner
router.post("/register", authenticateToken, isOwner, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      isOwner: false // New users are not owners by default
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.UserId, email: user.email, isOwner: user.isOwner },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create initial owner account
router.post("/create-owner", async (req, res) => {
  try {
    // Check if any owner exists
    const ownerExists = await User.findOne({ where: { isOwner: true } });
    if (ownerExists) {
      return res.status(403).json({ message: "Owner account already exists" });
    }

    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create owner account
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      isOwner: true
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.UserId, email: user.email, isOwner: user.isOwner },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error("Owner creation error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Verify owner status
router.get("/verify-owner", authenticateToken, (req, res) => {
  res.json({ isOwner: req.user.isOwner });
});

// Change password route
router.post("/change-password", authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = req.user;

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await user.update({ password: hashedPassword });

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Password change error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Debug route to check users
router.get("/debug/users", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['UserId', 'username', 'email', 'isOwner'] // Exclude password
    });
    console.log('All users:', users);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
