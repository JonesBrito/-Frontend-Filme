import axios from "axios";

//http://localhost:9090
const api = axios.create({
    baseURL: 'http://localhost:9090'
});

export default api;
