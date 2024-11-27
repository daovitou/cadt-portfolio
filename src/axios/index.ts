import axios from "axios";

const Axios = axios.create({
  baseURL: "http://api.weatherapi.com",
  timeout: 10000,
  headers: { "X-Custom-Header": "api" },
});

export default Axios;
