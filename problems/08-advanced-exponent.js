/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1 ==> b^(0/2) => b^0 => 1
exponent(b, 1) // b ==> b^(1/2) => b^1 = b     b^2^1/2  =  √(b^2) √anything(^2) = anything
anyting to 1/2 power = square
anyting to 1/3 power = cube
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:
a

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

function advancedExponent(b, n) {

// exponent(b, 0) // 1
  //base
  if (n === 0) {
    return 1;
  };
// exponent(b, 1) // b
  //base
  if (n === 1) {
    return b;
  }
// exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
  //recursive
  if (n % 2 === 0) {
    return advancedExponent(b, n / 2) * advancedExponent(b, n / 2);
  }

// exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]
  //recursive
  if (n % 2 !== 0) {
    return b * advancedExponent(b, (n - 1) / 2) * advancedExponent(b, (n - 1) / 2);
  }

}


// advancedExponent(2, 7); // 128
// advancedExponent(2, 8); // 256
// advancedExponent(2, 9); // 512
// advancedExponent(2, 10); // 1024
// advancedExponent(2, 11); // 2048
// advancedExponent(2, 12); // 4096
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = advancedExponent;
} catch (e) {
  module.exports = null;
}
