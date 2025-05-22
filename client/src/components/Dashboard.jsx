import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import ServiceForm from "./ServiceForm";
import ServiceList from "./ServiceList";

const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/services")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else if (Array.isArray(response.data.services)) {
          setServices(response.data.services);
        } else {
          console.error("Unexpected data shape:", response.data);
          setServices([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError("Failed to load services. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleDeleteService = (serviceId) => {
    axios.delete(`/api/services/${serviceId}`)
      .then(() => {
        setServices(services.filter((service) => service.serviceId !== serviceId));
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
        setError("Failed to delete service. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Service Management Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">
            Add, edit, and manage your cleaning services
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Form Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Add New Service</h3>
            <ServiceForm onAddService={handleAddService} />
          </div>

          {/* Service List Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Services</h3>
            {isLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-2 text-sm text-gray-600">Loading services...</p>
              </div>
            ) : (
              <ServiceList services={services} onDeleteService={handleDeleteService} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
