A high resolution timer for Node.js with precision in milliseconds.

#### Installation
```shell
npm install dannynemer/hrtimer
```

#### Usage
```js
var hrtimer = require('hrtimer')

// Start timer
hrtimer.start('my test')

// ...stuff...

hrtimer.end('my test')
// => Prints "my test: 13.264 ms"

// ...more stuff...

hrtimer.end('my test')
// => Prints "my test: 31.183 ms"
```