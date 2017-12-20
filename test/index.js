import { expect } from 'chai';
import app from '../src';

describe('basic usage', () => {
  it('should return a promise', () => {
    const store = {}
    const result = app(store, 'foo.bar.baz')
    expect(result.then).to.exist
  })
})
