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

// restricts requests to only come from this frontend URL or the localhost
// https://www.npmjs.com/package/cors

const allowedOrigins = [
  "https://rapid-refresh.vercel.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(newError("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// import routes and logic found at...

const sequelize = require("./controllers/connection");
const serviceRoutes = require("./routes/serviceRoutes");
const contactRoutes = require("./routes/contactRoutes");

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV); // This will print 'production' or 'development'

  app.use(express.static(path.join(__dirname, "../client/dist")));
}

// this needs to remain outside of the below if statement to always include a default route
app.get("/", (req, res) => {
  res.send("API access at localhost:3001");
});

// requests made to /services will go to serviceRoutes.js file, 1st parameter is building the url, 2nd parameter is the physical directory, this 1st parameter needs to match the axios post in serviceForm.jsx in the front

// tells Express, any request to /api/services should go to serviceRoutes
app.use("/api/services", serviceRoutes);
// still need to setup all configurations
app.use("/api", contactRoutes);



sequelize
  .authenticate()
  .then(() => {
    console.log("💡 Connected to DB:", sequelize.getDatabaseName());

    // Only sync if connected successfully
    return sequelize.sync({ force: true });
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ API server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err);
  });


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`API server running on port ${PORT} `));
// });
