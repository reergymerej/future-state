import app from './index';

describe('basic usage', () => {
  it('should return a promise', () => {
    const store = {}
    const result = app(store, 'foo.bar.baz')
    expect(result.then).toBeDefined()
  })
})
