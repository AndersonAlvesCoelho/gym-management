import axios from 'axios';

const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default viacepApi;
