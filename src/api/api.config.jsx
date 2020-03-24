import axios from 'axios'

 const http = axios.create({
    baseURL: 'https://swapi.co/api/',
})

export default http;