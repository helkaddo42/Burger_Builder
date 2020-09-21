import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-1efe7.firebaseio.com/'
});


export default instance;
