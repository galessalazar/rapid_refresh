// https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js#step-2-defining-the-get-request and BC #24

import axios from "axios";
import React from "react";

const getServices = () => {
  return axios.get("/api/services");
};

export default { getServices };

// handles the network request with axios
