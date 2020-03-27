import http from '../api/api.config'

export default class SwapiService {
  constructor () {
    this.http = http
  }

  async getAll (endpoint) {
    const response = await this.http.get(endpoint)
    const { results } = response.data

    return results
  }

  async getById (endpoint, id) {
    const data = await this.http.get(`${endpoint}/${id}`)

    return data
  }
}
