const express = require("express");
require("dotenv").config();
const path = require("path");
const db = require("./controllers/connection");
const Service = require('./models/Service')
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// this needs to remain outside of the below if statement to always include a default route
app.get("/", (req, res) => {
  res.send("API access");
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

 ;
}
// requests made to /services will go to serviceRoutes.js file, 1st parameter is building the url, 2nd parameter is the physical directory, this 1st parameter needs to match the axios post in serviceForm.jsx in the front
app.use('/api/services', serviceRoutes);

db.sync({force: true}).then(() => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT} `));
  });



