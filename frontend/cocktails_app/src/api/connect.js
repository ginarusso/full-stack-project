import axios from 'axios';

const apiConn = axios.create({
  baseURL: 'https://backend-for-cocktails-app.onrender.com'
});

export default apiConn;