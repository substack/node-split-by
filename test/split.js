var test = require('tap').test;
var splitBy = require('../');

test('split', function (t) {
    var xs = [ 3, 4, 0, 0, 0, 2, 1, 0, 5, 0, 0, 0, 5, 2, 1 ];
    var res = splitBy(xs, [ 0, 0, 0 ]);
    t.same(res, [ [ 3, 4], [ 2, 1, 0, 5 ], [ 5, 2, 1 ] ]);
    t.end();
});
