import axios from 'axios';

const api = axios.create({
    // colocar o ip da maquina
    baseURL: 'http://192.168.1.176:3333',
    //baseURL: 'http://192.168.5.141:3333',
});

export default api;