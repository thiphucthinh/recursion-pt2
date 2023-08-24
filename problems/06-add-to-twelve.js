/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
             1  3
                3  4
                   4  7
                      7  5
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// function addToTwelve(arr) {
//   if (arr.length === 1) {
//     return false;
//   };
//   //base case;
//   if (arr[0] + arr[1] === 12) {
//     return true;
//   }
//   //recursive case;
//   return addToTwelve(arr.slice(1));
//                     //resursive step
// }

function addToTwelve(arr, index = 0) {
  if (index >= arr.length) {
    return false;
  };

  if (arr[index] + arr[index + 1] === 12) {
    return true;
  }

  return addToTwelve(arr, index +1);

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
