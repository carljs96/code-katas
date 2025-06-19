// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such that:
// F(0)=0
// F(1)=1
// F(n)=F(n−1)+F(n−2)
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
// F(n)∗F(n+1)=prod
const productFib = (prod) => {
  let x = 0,
    y = 1;
  while (x * y < prod) [x, y] = [y, x + y];
  return [x, y, x * y === prod];
};

module.exports = productFib;
