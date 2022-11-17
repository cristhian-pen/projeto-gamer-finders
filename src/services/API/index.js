import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3001/', //ulr da api
    timeout: 1000,
});