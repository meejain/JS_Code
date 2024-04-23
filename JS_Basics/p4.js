function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

function memorize (fn) {
    const cache = {};
    return function (x) {
        if (cache[x] === undefined) {
            cache[x] = fn(x);
        }
        return cache[x];
    }
}

var result = memorize(fibo);

console.time('first');
console.log(result(10)); 
console.timeEnd('first');

console.time('second');
console.log(result(10)); 
console.timeEnd('second');