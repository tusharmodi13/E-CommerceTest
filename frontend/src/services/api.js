import axios from "axios";

const API = axios.create({
  baseURL: "https://eshop-backend-99l1.onrender.com/api",
});

export default API;