/* eslint-env jest */

import isObject from './is-object.helper'

describe('IsObject Helper', () => {
  test('Deve verificar se o valor é  Objeto', () => {
    expect(isObject({ key: 'key', value: 'value' })).toBe(true)
  })

  test('Deve verificar se o valor é  Objeto quando passado um array', () => {
    expect(isObject([{ key: 'key', value: 'value' }])).toBe(true)
  })
})
