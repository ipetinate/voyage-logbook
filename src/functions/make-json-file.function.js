const makeJsonFile = function (text) {
  const data = URL.createObjectURL(
    new Blob(
      [JSON.stringify(text, null, 2)],
      { type: 'application/json' }
    )
  )

  return data
}

export default makeJsonFile
