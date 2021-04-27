import axios from 'axios';
const getBackendUrl = () => {
  if (process.env.REACT_APP_HASH !== undefined) {
    return `https://staging-ide.hackerearth.com/${process.env.REACT_APP_HASH}.backend/`;
  }
  return 'http://localhost:8000/';
};
const instance = axios.create({
  baseURL: getBackendUrl(),
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});
export default instance;