const fib = (num) => {
  let x = 0;
  let y = 1;
  for (let i = 0; i < num; i++) {
    [x, y] = [y, x + y];
  }
  return x;
};
module.exports = fib;
