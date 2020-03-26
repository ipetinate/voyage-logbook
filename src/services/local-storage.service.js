import isObject from '../helpers/is-object.helper'

export default class LocalStorageService {
  clear () {
    window.localStorage.clear()
  }

  create (key, value) {
    if (isObject(value) || Array.isArray(value)) {
      value = this.objectSerialize(value)
    }

    window.localStorage.setItem(key, value)
  }

  read (key) {
    if (!key || key === '') { return }

    const value = window.localStorage.getItem(key)

    return this.objectDeserialize(value)
  }

  update (key, value) {
    if (isObject(value)) {
      value = this.objectSerialize(value)
    }

    window.localStorage.setItem(key, value)
  }

  delete (key) {
    if (!key || key === '') { return }

    window.localStorage.removeItem(key)
  }

  objectDeserialize (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      if (e) {
        return value
      }
    }
  }

  objectSerialize (value) {
    if (!isObject(value)) return

    try {
      return JSON.stringify(value)
    } catch (e) {
      console.err('This object can\'t be serialized.')
    }
  }
}
