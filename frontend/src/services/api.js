import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-service-yv9k.onrender.com/api"
});

export default API;
