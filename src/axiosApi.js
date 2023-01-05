import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://localhost:8080/v1/deliveries',
    timeout: 1000,
})

export {
    getAPI
}