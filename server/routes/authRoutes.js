// https://www.geeksforgeeks.org/json-web-token-jwt/

const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const SECRET_KEY = "abcde12345";


//REQUIRES UPDATED DATA
const dummyUser = {
  id: 1,
  username: "Poo",
  password: "password123",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;
// running the credentials match
if (username === dummyUser.username && password === dummyUser.password) {
    // if match, token generates
  const token = jwt.sign({ id: dummyUser.id, username }, SECRET_KEY, {
    expiresIn: "1h",
  });
//   respond with token to client
  res.json({ token });
} else {
  res.status(401).json({ message: "Invalid username or password" });
}
})
module.exports = router;
