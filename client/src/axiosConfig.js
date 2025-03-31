import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const api = axios.create({
    baseURL: BASE_URL + '/api',
    headers: {
        
            'Content-Type': 'application/json',
        }
    }
)

export default api;