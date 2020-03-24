export class LocalStorageService {
  clear () {
    window.localStorage.clear()
  }

  create (key, value) {
    window.localStorage.setItem(key, value)
  }

  read (key) {
    window.localStorage.getItem(key)
  }

  update (key, value) {
    window.localStorage.setItem(key, value)
  }

  delete (key) {
    window.localStorage.removeItem(key)
  }
}
