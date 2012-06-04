module.exports = function (xs, ys) {
    var res = [];
    var i = 0, j = 0, k = 0;
    for (; i < xs.length; i++) {
        if (xs[i] === ys[j]) {
            j++;
            if (j === ys.length) {
                res.push(xs.slice(k, i - j + 1));
                j = 0;
                k = i + 1;
            }
        }
        else j = 0;
    }
    
    if (k < i) res.push(xs.slice(k, i));
    return res;
};
