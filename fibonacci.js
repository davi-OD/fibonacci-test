const Perfect = require('./perfectSquare')
module.exports = class Fibo {
    isFibonacci(n) {
        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
        // is a perfect square
        const square = new Perfect();
        return square.isPerfectSquare(5 * n * n + 4) || square.isPerfectSquare(5 * n * n - 4);
      }
}

