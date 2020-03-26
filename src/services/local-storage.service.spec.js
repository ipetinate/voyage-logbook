/* eslint-env jest */
import LocalStorageService from './local-storage.service'

describe('LocalStorageService', () => {
  const service = new LocalStorageService()

  beforeEach(() => {
    window.localStorage.clear()
  })

  test('Deve criar um item no localStorage com chave e valor', () => {
    const KEY = 'CHAVE'
    const VALUE = 'VALOR'

    service.create(KEY, VALUE)

    expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE)
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1)
  })

  test('Deve atualizar um item no localStorage com chave e valor', () => {
    const KEY = 'KEY'
    const VALUE = 'VALUE'

    service.update(KEY, VALUE)

    expect(window.localStorage.setItem).not.toHaveBeenLastCalledWith('foo', 'bar')
    expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE)
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1)
  })

  test('Deve obter um item no localStorage a partir da chave', () => {
    const KEY = 'foo'
    service.create(KEY, 'valor')

    const VALUE = service.read(KEY)

    expect(window.localStorage.getItem).toHaveBeenCalledWith(KEY)
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE)
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1)
  })

  test.skip('Deve remover um item do localStorage a partir de uma chave', () => {
    const KEY = 'key'
    const VALUE = 'value'

    service.create(KEY, VALUE)

    service.delete(KEY)

    expect(window.localStorage.removeItem).toHaveBeenLastCalledWith(KEY)
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(0)
  })

  test('Deve limpar o localStorage', () => {
    service.clear()

    expect(window.localStorage.clear).toHaveBeenCalled()
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(0)
  })

  it('Deve serializar o dado se for um objeto e retornar como string', () => {
    const objeto = { prop: '', value: 1 }

    const objetoSerializado = service.objectSerialize(objeto)

    expect(objetoSerializado).toEqual(JSON.stringify(objeto))
  })

  it('Deve desserializar o objeto em string e retornar o valor original como objeto', () => {
    const stringObj = JSON.stringify({ prop: '', value: 1 })
    const stringReal = 'string'

    const objetoDesserializado1 = service.objectDeserialize(stringObj)
    const objetoDesserializado2 = service.objectDeserialize(stringReal)

    expect(objetoDesserializado1).toEqual(JSON.parse(stringObj))
    expect(objetoDesserializado2).toEqual(stringReal)
  })
})
