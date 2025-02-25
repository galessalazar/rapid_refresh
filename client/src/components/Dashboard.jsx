import React, { useEffect, useState} from "react";
import axios from '../axiosConfig';

const Dashboard = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({
        serviceName: '',
        serviceDescription: '', 
        costOfService: '',
        estimatedTime: '',
    })

    useEffect(() => {
        axios.get('/services').then(response => {
            setServices(response.data);
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/services', newService).then(response => {
            setServices([...services, response.data]);
            setNewService({ serviceName: '', serviceDescription: '', costOfService: '', estimatedTime: ''});

        })

        .catch(error => {
            console.error('Error adding service:', error);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`/services/${id}`).then(() => {
            setServices(services.filter(service => service.id !== id))
        })

        .catch(error => {
            console.error('Error deleting service:', error);
        }) 
    }
}