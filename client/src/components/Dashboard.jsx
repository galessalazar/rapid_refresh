import React, { useEffect, useState} from "react";
import axios from '../axiosConfig';
import ServiceForm from "./ServiceForm";

const Dashboard = () => {
    const [services, setServices] = useState([]);
    // setServices([...services, response.data]);


    useEffect(() => {
        axios.get('/services').then(response => {
            setServices(response.data);
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        })
    }, []);

    const handleAddService = (newService) => {
        setServices([...services, newService])
    }
const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id))
}

return (
    <div>

        <h2>Dashboard</h2>
        <ServiceForm onAddService={handleAddService} />
        <ServiceList services={services} onDeleteService={handleDeleteService} />
    </div>
)
   
}

export default Dashboard;