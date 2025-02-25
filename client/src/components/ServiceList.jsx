import React from "react";

const ServiceList = ({ services, onDeleteService}) => {
    return (
        <ul>
            {services.map(service => (
                <li key={service.id}>
                    <strong>{service.serviceName}</strong> - ${service.costOfService}
                    <button onClick={() => onDeleteService(service.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList;