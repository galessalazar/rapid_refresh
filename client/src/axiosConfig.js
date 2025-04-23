import axios from "axios";






console.log("API is pointing to:",
  //  BASE_URL
  );

// setting up Axios to send HTTP requests to Express backend
// https://axios-http.com/docs/instance

const api = axios.create({ baseURL:"/api",
  // baseURL: BASE_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Sends GET request to localhost or heroku URL
// https://axios-http.com/docs/res_schema

axios.get("/services")
  .then((response) => {
    console.log("Services fetched:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching services:", error);
  });

export default api;
