const makeTextFile = function (text) {
  const data = new Blob([text], { type: 'text/plain' })

  return window.URL.createObjectURL(data)
}

export default makeTextFile
