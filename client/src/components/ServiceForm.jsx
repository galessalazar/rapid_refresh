import React, { useState} from "react";
import axios from "../axiosConfig";

const ServiceForm = ({ onAddService }) => {
    const [newService, setNewService] = useState({
        serviceName: '',
        serviceDescription: '', 
        costOfService: '',
        estimatedTime: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/services', newService).then(response => {
            onAddService(response.data);
            setNewService({ serviceName: '', serviceDescription: '', costOfService: '', estimatedTime: ''});

        })

        .catch(error => {
            console.error('Error adding service:', error);
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" value={newService.serviceName} onChange={(e) => setNewService({ ...newService, serviceName: e.target.value})} placeholder="Service Name" required />

            <input 
            type="text"
            value={newService.serviceDescription}
            onChange={(e) => setNewService({ ...newService, serviceDescription: e.target.value})}
            placeholder="Description" required />

            <input
            type="number"
            value={newService.costOfService}
            onChange={(e) => setNewService({...newService, costOfService: e.target.value})}
            placeholder="Cost"
            // wont leave input empty
            required
            // prevents negative values 
            min='0'
            // allows for decimals/ not necessary
            // step='0.01'
            />

            <input
            type="number"
            value={newService.estimatedTime}
            onChange={(e) => setNewService({ ...newService, estimatedTime: e.target.value})}
            placeholder="Time (in hours)" required min='0' />

            <button type="submit">Add Service</button>
        </form>
    )
};

export default ServiceForm;