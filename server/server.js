const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
// /must place prior to any routes or it wont work

const app = express();
// middleware used with forms/ submits, parses data coming in through HTTP requests
// entire line allows you to pass additional modifications through the URL
app.use(express.urlencoded({ extended: true }));

// middleware, receive a string format, you can parse into an obj or array to work w/in code, then makes it accessible in req.body
// required to post content to backend-converts to JSON OBJ, same as json.parse
app.use(express.json());

// import routes and logic found at...

const sequelize = require("./controllers/connection");
const serviceRoutes = require("./routes/serviceRoutes");
const contactRoutes = require("./routes/contactRoutes");
// const { sequelize } = require('./models/index');

const PORT = process.env.PORT || 3001;

// restricts requests to only come from this frontend URL
app.use(
  cors({
    origin: "https://rapid-refresh.vercel.app",
  })
);

// this needs to remain outside of the below if statement to always include a default route
app.get("/", (req, res) => {
  res.send("API access");
});

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV); // This will print 'production' or 'development'

  app.use(express.static(path.join(__dirname, "../client/dist")));
}
// requests made to /services will go to serviceRoutes.js file, 1st parameter is building the url, 2nd parameter is the physical directory, this 1st parameter needs to match the axios post in serviceForm.jsx in the front

// removed /api to test connection
app.use("/services", serviceRoutes);
// still need to setup all configurations
app.use("/api", contactRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT} `));
});
