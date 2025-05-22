import React, { useState } from "react";
import axios from "../axiosConfig";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./Test";

const ServiceForm = ({ onAddService }) => {
  // newservice is the state variable holding current values and setnewservice is the function that updates the state variable, can call anywhere in the newservice obj you want changes
  const [newService, setNewService] = useState({
    serviceName: "",
    serviceDescription: "",
    costOfService: "",
    estimatedTime: "",
  });

//   will hold info about the the toast, custom message each time
  const [toast, setToast] = useState({
    open: false,
    title: '',
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    // sends the new services to backend point with  the new service data from form
      .post("/api/services", newService)
      .then((response) => {
        onAddService(response.data);
        // resets the fields to blank
        setNewService({
          serviceName: "",
          serviceDescription: "",
          costOfService: "",
          estimatedTime: "",
        });

        setToast({
            open: true,
            title: "Success!",
            description: "Service added successfully.",
        });
        // sets it to auto hide after 3 secs
        setTimeout(() => {
            setToast({ open: false, title: '', description: '' });
        }, 3000);
      })

      .catch((error) => {
        console.error("Error adding service:", error);
        // Error toast

        setToast({
            open: true,
            title: "Error",
            description: 'Failed to add service. Please try again.',
        });
        setTimeout(() => {
            setToast({ open: false, title: '', description: '' });
        }, 3000);
      });
  };

  return (
    <ToastProvider>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">
            Service Name
          </label>
          <input
            id="serviceName"
            type="text"
            value={newService.serviceName}
            onChange={(e) => setNewService({ ...newService, serviceName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Deep Cleaning"
            required
          />
        </div>

        <div>
          <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="serviceDescription"
            value={newService.serviceDescription}
            onChange={(e) => setNewService({ ...newService, serviceDescription: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe the service in detail"
            rows="3"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="costOfService" className="block text-sm font-medium text-gray-700">
              Cost ($)
            </label>
            <input
              id="costOfService"
              type="number"
              value={newService.costOfService}
              onChange={(e) => setNewService({ ...newService, costOfService: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="0.00"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label htmlFor="estimatedTime" className="block text-sm font-medium text-gray-700">
              Time (hours)
            </label>
            <input
              id="estimatedTime"
              type="number"
              value={newService.estimatedTime}
              onChange={(e) => setNewService({ ...newService, estimatedTime: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="0"
              required
              min="0"
              step="0.5"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Service
        </button>
      </form>
      {toast.open && (
        <Toast>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
            <ToastClose onClick={() => setToast({ open: false, title: '', description: ''})} />
        </Toast>
      )}
      <ToastViewport />
    </ToastProvider>
  );
};

export default ServiceForm;
