import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            // sends a POST request to backend at /api/contacts

            await axios.post('/api/contacts', formData);
           
            // clear out the form after hitting submit

            setFormData({
            name: '',
            email: '',
            message:'',
        })
       
        alert('Thank you for contacting us!');
 } catch (error) {
    console.error('Error submitting the form:', error);
    alert('There was an error submitting your message. Please try again.')
 }
       
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                />
                <label htmlFor="email">Email:</label>
                <input
                type="text"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;