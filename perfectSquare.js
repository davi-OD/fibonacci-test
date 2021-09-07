module.exports = class Perfect {
    isPerfectSquare(x) {
        const s = parseInt(Math.sqrt(x));
      
        return (s * s == x);
      }
}
    