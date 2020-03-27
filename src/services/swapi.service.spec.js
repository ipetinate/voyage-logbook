/* eslint-env jest */

import mockAxios from 'axios'
import SwapiService from './swapi.service'

import Endpoints from '../dictionaries/endpoints.dictionary'

import { planets } from '../constants/planets-data.constant'

jest.mock('axios')

describe('SwapiService', () => {
  const service = new SwapiService()
  const data = planets

  test('Deve requisitar os dados da API no enpoint "Planets"', async () => {
    const endpoint = Endpoints.get('PLANETS')

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data.results))

    service.getAll(endpoint).then(x => expect(x).toEqual(data.results))
    await expect(mockAxios.get).toHaveBeenCalledWith(
      `${endpoint}`
    )
  })

  test('Deve requisitar os dados da API do enpoint "Planets" por ID', async () => {
    const endpoint = Endpoints.get('PLANETS')
    const id = 'asdsd'

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data))

    await service.getById(endpoint, id).then(x => expect(x).toEqual(data))
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${endpoint}/${id}`
    )
  })
})
