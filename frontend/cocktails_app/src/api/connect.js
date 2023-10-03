import axios from 'axios';

const apiConn = axios.create({
  baseURL: 'http://localhost:3001'
});

export default apiConn;