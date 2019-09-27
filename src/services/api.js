import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

console.log(baseURL);

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
