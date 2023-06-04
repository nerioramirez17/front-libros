import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://openlibrary.org', // URL base de tu API
  timeout: 5000, // Tiempo de espera para las solicitudes (en milisegundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;