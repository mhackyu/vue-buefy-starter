import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_BASE_API_URL || 'http://localhost:3000/api',
  timeout: process.env.VUE_APP_REQUEST_TIMEOUT || 5000
};

const client = axios.create(config);

export default client;
