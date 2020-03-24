import { LocalStorageService } from './local-storage.service'

describe('LocalStorageService', () => {
  const service = new LocalStorageService()

  beforeEach(() => {
    localStorage.clear()
  })

  test('Deve criar um item no localStorage com chave e valor', () => {
    const KEY = 'foo'
    const VALUE = 'bar'

    service.create(KEY, VALUE)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
    expect(localStorage.__STORE__[KEY]).toBe(VALUE)
    expect(Object.keys(localStorage.__STORE__).length).toBe(1)
  })

  test('Deve atualizar um item no localStorage com chave e valor', () => {
    const KEY = 'KEY'
    const VALUE = 'VALUE'

    service.update(KEY, VALUE)

    expect(localStorage.setItem).not.toHaveBeenLastCalledWith('foo', 'bar')
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
    expect(localStorage.__STORE__[KEY]).toBe(VALUE)
    expect(Object.keys(localStorage.__STORE__).length).toBe(1)
  })

  test('Deve limpar o localStorage', () => {
    service.clear()

    expect(localStorage.clear).toHaveBeenCalled()
    expect(Object.keys(localStorage.__STORE__).length).toBe(0)
  })
})
