import React, { useState } from "react";
import axios from "../axiosConfig";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
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
            title: "Service Added!",
            description: "Your new service has been added successfully.",
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
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newService.serviceName}
          onChange={(e) =>
            setNewService({ ...newService, serviceName: e.target.value })
          }
          placeholder="Service Name"
          required
        />

        <input
          type="text"
          value={newService.serviceDescription}
          onChange={(e) =>
            setNewService({ ...newService, serviceDescription: e.target.value })
          }
          placeholder="Description"
          required
        />

        <input
          type="number"
          value={newService.costOfService}
          onChange={(e) =>
            setNewService({ ...newService, costOfService: e.target.value })
          }
          placeholder="Cost"
          // wont leave input empty
          required
          // prevents negative values
          min="0"
          // allows for decimals/ not necessary
          // step='0.01'
        />

        <input
          type="number"
          value={newService.estimatedTime}
          onChange={(e) =>
            setNewService({ ...newService, estimatedTime: e.target.value })
          }
          placeholder="Time (in hours)"
          required
          min="0"
        />

        <button type="submit">Add Service</button>
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
