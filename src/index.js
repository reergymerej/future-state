const getFutureStoreValues = (store, value) =>
  new Promise((resolve) => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      let value
      try {
        value = state.foo.bar.baz
      } catch (err) {
        console.log(err)
      }
      if (value !== undefined) {
        unsubscribe()
        resolve(value)
      }
    })
  })


const app = (store, value) => {
  return getFutureStoreValues(store)
}
export default app
