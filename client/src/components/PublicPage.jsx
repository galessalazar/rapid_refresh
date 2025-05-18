import React, { useState, useEffect } from "react";
import servicesApi from "../utils/API";

const PublicServices = () => {
  // services is a state variable, empty initially
  const [services, setServices] = useState([]);
  // setServices is the func used to update the array

  // runs the code once when the component loads
  useEffect(() => {
    // this calls the helper func, axios.get
    servicesApi
      .getServices()
      // when resolved, get the res and use res.data to store into state, the res.data is now the array of service objects from the db
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1 className="bruno-heading">Services Available</h1>
      <ul>
        {/* Mapping each service object, property names must match those defined in the backend model */}

        {services.map((service) => (
          <li key={service.serviceId}>
            <h2>{service.serviceName}</h2>
            <p>{service.serviceDescription}</p>
            <p>{service.costOfService}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicServices;
