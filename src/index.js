const getValueByPath = (obj = {}, path) => {
  const parts = path.split('.')
  const part = parts.shift()
  const currentValue = obj[part]
  return parts.length
    ? getValueByPath(currentValue, parts.join('.'))
    : currentValue
}

const getFutureStoreValue = (store, valuePath) =>
  new Promise((resolve) => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      const value = getValueByPath(state, valuePath)
      if (value !== undefined) {
        unsubscribe()
        resolve(value)
      }
    })
  })

const app = (store, value) => {
  return getFutureStoreValue(store, value)
}

export default app
