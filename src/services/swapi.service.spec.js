/* eslint-env jest */

import mockAxios from 'axios'
import SwapiService from './swapi.service'

import Endpoints from '../dictionaries/endpoints.dictionary'

import { peopleOne } from '../constants/people-data.constant'

jest.mock('axios')

describe('SwapiService', () => {
  const service = new SwapiService()
  const data = peopleOne

  test('Deve requisitar os dados da API do enpoint "People"', async () => {
    const endpoint = Endpoints.get('PEOPLE')

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data))

    await service.getAll(endpoint).then(x => expect(x).toEqual(data))
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${endpoint}`
    )
  })

  test('Deve requisitar os dados da API do enpoint "People" por ID', async () => {
    const endpoint = Endpoints.get('PEOPLE')
    const id = 'asdsd'

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data))

    await service.getById(endpoint, id).then(x => expect(x).toEqual(data))
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${endpoint}/${id}`
    )
  })
})
