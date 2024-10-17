import axios, { AxiosInstance } from "axios";

const API_URL = import.meta.env.VITE_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,  
  headers: {
    'x-api-key': API_KEY, 
    'Content-Type': 'application/json'
  },
});

export default apiClient;