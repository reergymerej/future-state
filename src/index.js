const getValueByPath = (obj, path) => {
  if (obj) {
    let value

    const parts = path.split('.')
    const part = parts.shift()
    const thing = obj[part]

    if (parts.length) {
      return getValueByPath(thing, parts.join('.'))
    } else {
      return thing
    }
  }
}

const getFutureStoreValues = (store, valuePath) =>
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
  return getFutureStoreValues(store, value)
}
export default app
