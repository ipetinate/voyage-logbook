import axios from 'axios'
import { API } from '../dictionaries/api.dictionary'

const http = axios.create({
  baseURL: API.get('BASE_URL')
})

export default http
