var splitBy = require('../');
var xs = [ 3, 4, 0, 0, 0, 2, 1, 0, 5, 0, 0, 0, 5, 2, 1 ];
var res = splitBy(xs, [ 0, 0, 0 ]);
console.dir(res);
