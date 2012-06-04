split-by
========

Split an array or a string by another array or string.

[![build status](https://secure.travis-ci.org/substack/node-split-by.png)](http://travis-ci.org/substack/node-split-by)

example
=======

``` js
var splitBy = require('split-by');
var xs = [ 3, 4, 0, 0, 0, 2, 1, 0, 5, 0, 0, 0, 5, 2, 1 ];
var res = splitBy(xs, [ 0, 0, 0 ]);
console.dir(res);
```

output:

```
[ [ 3, 4 ], [ 2, 1, 0, 5 ], [ 5, 2, 1 ] ]
```

methods
=======

``` js
var splitBy = require('split-by')
```

splitBy(xs, ys)
---------------

Return an array of `xs` split by `ys`, not including the elements split on.

install
=======

With [npm](http://npmjs.org) do:

```
npm install split-by
```

license
=======

MIT
