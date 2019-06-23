import axios from 'axios';

export const baseURL = 'https://clone-medium-api.herokuapp.com';

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
