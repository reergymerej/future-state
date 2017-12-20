import app from './index';
import { createStore } from 'redux'

describe('basic usage', () => {
  it('should return a promise', () => {
    const store = createStore(() => {})
    const result = app(store, 'foo.bar.baz')
    expect(result.then).toBeDefined()
  })

  it('should give you the value from the store', async () => {
    const baz = 'I am the baz!'
    const reducer = (state = {}, action) => {
      if (action.type === 'DO_THE_DANG_THING') {
        return {
          foo: {
            bar: {
              baz,
            },
          },
        }
      }
      return state
    }
    const store = createStore(reducer)
    setTimeout(() => {
      store.dispatch({
        type: 'DO_THE_DANG_THING',
      })
    }, 0)
    const result = await app(store, 'foo.bar.baz')
    expect(result).toBe(baz)
  })

  it('should be resilient to non-existent values', async () => {
    const weasel = 'I am the weasel!'
    const reducer = (state = {}, action) => {
      if (action.type === 'FIRST') {
        return {
          chicken: 'hi',
        }
      }
      if (action.type === 'SECOND') {
        return {
          chicken: { spider: { weasel } },
        }
      }
      return state
    }
    const store = createStore(reducer)
    setTimeout(() => {
      store.dispatch({
        type: 'FIRST',
      })
      store.dispatch({
        type: 'SECOND',
      })
    }, 0)

    const result = await app(store, 'chicken.spider.weasel')
  })
})
