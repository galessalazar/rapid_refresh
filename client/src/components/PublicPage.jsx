

import React, { useState, useEffect } from "react";
import  getServices  from '../utils/API';

const PublicServices = () => {
    // services is a state variable, empty initially
    const [services, setServices] = useState([]);
    // setServices is the func used to update the array

// runs the code once when the component loads
    useEffect(() => {
        // this calls the helper func, axios.get
        getServices.getServices()
        // when resolved, get the res and use res.data to store into state, the res.data is now the array of service objects from the db
        .then((res) => setServices(res.data))
        .catch((err) => console.error('Fetch error:', err));
    }, []);

    return (
        <div>

            <h1>Services Available</h1> 
            <ul>
                {services.map((service) => (
                    <li key={service.id || service._id}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>{service.cost}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PublicServices;