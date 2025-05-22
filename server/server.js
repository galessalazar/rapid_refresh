const express = require("express");
require("dotenv").config();
const path = require("path");
const { authMiddleware } = require('./utils/auth');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");

const app = express();
// middleware used with forms/ submits, parses data coming in through HTTP requests
// entire line allows you to pass additional modifications through the URL
app.use(express.urlencoded({ extended: true }));

// middleware, receive a string format, you can parse into an obj or array to work w/in code, then makes it accessible in req.body
// required to post content to backend-converts to JSON OBJ, same as json.parse
app.use(express.json());

//  app.use(expressMiddleware(server, {
//     context: authMiddleware
//   }));

 

// restricts requests to only come from this frontend URL or the localhost
// https://www.npmjs.com/package/cors

const allowedOrigins = [
  "https://rapid-refresh.onrender.com",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// serve the static files like index.html, .css from dist __dirname gives the current directory, path.join ensures always points to the right location 
app.use(express.static(path.join(__dirname, "../client/dist")));

// import routes and logic found at...

const sequelize = require("./controllers/connection");
const serviceRoutes = require("./routes/serviceRoutes");
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV); // This will print 'production' or 'development'

  // app.use(express.static(path.join(__dirname, "../client/dist")));
}



// requests made to /services will go to serviceRoutes.js file, 1st parameter is building the url, 2nd parameter is the physical directory, this 1st parameter needs to match the axios post in serviceForm.jsx in the front

// tells Express, any request to /api/services should go to serviceRoutes
app.use('/api', authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api", apiRoutes);

// this needs to remain outside of the below if statement to always include a default route
app.get("/", (req, res) => {
  res.send("API access at localhost:3001");
});

// catches all routes not matched and sends back index.html no matter the path, must be last
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

sequelize
  .authenticate()
  .then(() => {
    console.log("💡 Connected to DB:", sequelize.getDatabaseName());
    // Only sync if connected successfully - using force: false for production
    return sequelize.sync({ force: false });
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
