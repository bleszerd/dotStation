import axios from 'axios'

const Axios = axios.create({
    baseURL: process.env.AXIOS_BASE_URL
})

export default Axios