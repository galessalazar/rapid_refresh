import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import ServiceForm from "./ServiceForm";
import ServiceList from "./ServiceList";

const Dashboard = () => {
  const [services, setServices] = useState([]);
  // setServices([...services, response.data]);

  useEffect(() => {
    // this get needs to match the server.js url built
    axios.get("/api/services")
      .then((response) => {
        console.log("Response status:", response.status);
    console.log("Raw response data:", response.data);

        console.log("Response from /api/services:", response.data);

        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else if (Array.isArray(response.data.services)) {
          setServices(response.data.services);
        } else {
          console.error("Unexpected data shape:", response.data);
          setServices([]); // fallback to empty
        }
      })

      //   setServices(response.data);
      // })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };
  const handleDeleteService = (serviceId) => {
    axios.delete(`/api/services/${serviceId}`).then(() => {
      setServices(
        services.filter((service) => service.serviceId !== serviceId)
      );
    });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ServiceForm onAddService={handleAddService} />
      <ServiceList services={services} onDeleteService={handleDeleteService} />
    </div>
  );
};

export default Dashboard;
