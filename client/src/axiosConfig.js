import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

console.log("API is pointing to:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Sends GET request to localhost or heroku URL

api
  .get("/services")
  .then((response) => {
    console.log("Services fetched:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching services:", error);
  });

export default api;
