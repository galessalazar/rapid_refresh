import React from "react";

const ServiceList = ({ services, onDeleteService}) => {

    // if (!Array.isArray(services) || services.length === 0) {
    //     return <p>No services available</p>
    // }
    return (
        <ul>
            {services.map(service => (
                <li key={service.serviceId}>
                    <strong>{service.serviceName}</strong> - ${service.costOfService}
                    <button onClick={() => onDeleteService(service.serviceId)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList;