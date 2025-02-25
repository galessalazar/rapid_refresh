import React, { useEffect, useState} from "react";
import axios from '../axiosConfig';

const Dashboard = () => {
    const [services, setServices] = useState([]);
    setServices([...services, response.data]);


    useEffect(() => {
        axios.get('/services').then(response => {
            setServices(response.data);
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        })
    }, []);

   
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