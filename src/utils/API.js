import axios from 'axios';
import {getToken} from './Commons';

export default axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers : {
      'Authorization' : `${getToken()}`
    },
    responseType: "json"
  });