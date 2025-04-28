import axios from "axios";


// setting up Axios to send HTTP requests to Express backend
// https://axios-http.com/docs/instance

// render url in env makes it easier to call, cannot use process.env need this to expose env variables to frontend, create only the local url here and add the viteapiurl to renders environment variables
const apiUrl = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ,
  // baseURL: BASE_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Sends GET request to localhost or heroku URL
// https://axios-http.com/docs/res_schema

axios
  .get(`${apiUrl}/api/services`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching services:", error);
  });

export default api;
