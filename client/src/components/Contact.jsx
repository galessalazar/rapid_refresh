import React, { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us!');

// clear out the form after hitting submit
        setFormData({
            name: '',
            email: '',
            message:'',
        })
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