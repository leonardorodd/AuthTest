/* eslint-disable no-throw-literal */
import axios from 'axios';

const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_API_SERVICE_HOST}:${process.env.REACT_APP_API_SERVICE_PORT}`,
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
});

api.interceptors.response.use(
    response => {
        console.log(response);

        return response.data.message;
    },
    error => {
        if (!error.response) {
            // The request was made but no response was received
            throw new Error('Server was not responding');
        }

        return Promise.reject(error.response.data);
    }
);

export default api;
