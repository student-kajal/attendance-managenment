// import axios from 'axios';

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
// });

// export default API;
import axios from 'axios';

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
// });
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export default API;
