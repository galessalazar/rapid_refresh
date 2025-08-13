// https://www.geeksforgeeks.org/json-web-token-jwt/

const express = require("express");

const router = express.Router();
const { User } = require("../models");

const { sequelize } = require("../models");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Verify owner status
router.get("/verify-owner", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);
  if (error) return res.status(401).json({ message: "Invalid token" });

  const isOwner = user?.user_metadata?.isOwner || false;

  res.json({ isOwner });
  console.log("req.user:", req.user);
});

// Debug route to check users
router.get("/debug/users", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["UserId", "username", "email", "isOwner"], // Exclude password
    });
    console.log("All users:", users);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
