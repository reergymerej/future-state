# future-state

[![Build Status](https://travis-ci.org/reergymerej/future-state.svg?branch=master)](https://travis-ci.org/reergymerej/future-state)

Subscribe to _future_ values in a [Redux store].


## Why?

You know that _eventually_ some values will show up in your Redux state and you
want to get them as soon as they appear.



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


As soon as your value(s) are in the state the promise is resolved.  The
subscriptions are removed and pasted over with rubber cement to prevent memory
leaks.


## Installation

Download this random zip file from a suspicious fileserver and... just kidding.

```
yarn add future-state
```


## Feedback

Bug reports, PRs, and comments are always welcome!


---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
[Redux store]: https://redux.js.org/docs/api/Store.html
