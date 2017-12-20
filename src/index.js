const getValueByPath = (obj = {}, path) => {
  const parts = path.split('.')
  const part = parts.shift()
  const currentValue = obj[part]
  return parts.length
    ? getValueByPath(currentValue, parts.join('.'))
    : currentValue
}

const getAllValues = (obj, valuePaths) => {
  const allValues = valuePaths.map(path => getValueByPath(obj, path))
  return allValues.filter(x => x !== undefined)
}

const getFutureStoreValue = (store, valuePaths) =>
  new Promise((resolve) => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      const valuePathsArray = typeof valuePaths === 'string'
        ? [valuePaths]
        : valuePaths
      const allValues = getAllValues(state, valuePathsArray)
      if (allValues.length === valuePathsArray.length) {
        unsubscribe()
        if (allValues.length === 1) {
          resolve(allValues[0])
        } else {
          resolve(allValues)
        }
      }
    })
  })

const app = (store, value) => {
  return getFutureStoreValue(store, value)
}

export default app
