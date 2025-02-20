const express = require("express");
require("dotenv").config();
const path = require("path");
const db = require("./controllers/connection");
const Service = require('./models/Service')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("/", (req, res) => {
    res.send("");
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT} `);
  });
});


