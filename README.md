# future-state


## Usage

```js
import futureState from 'future-state'

// wait for a value
futureState(reduxStore, 'foo.bar.baz')
  .then(bar => console.log('Hi, bar!', bar))

// or multiple values
futureState(reduxStore, ['foo.bar.baz', 'bingo.bango'])
  .then(values => {
    console.log('foo.bar.baz', values[0])
    console.log('bingo.bango', values[1])
  })
```








---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
