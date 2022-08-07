import axios from "axios";

//http://localhost:9090
const api = axios.create({
    baseURL: 'https://api-jsflix.herokuapp.com/'
});

export default api;
