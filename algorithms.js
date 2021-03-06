///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

// Input: string of letters (string)
// Output: number of vowels (int)
// Base case: string length = undefined
// check the first letter,

var countVowels = function(str){
  var numVowels = 0;
  var isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char) ? 1 : 0
  };
  if (str.length === 1) {
    return numVowels += isVowel(str[0]);
  } else {
    numVowels += isVowel(str[0]);
    return numVowels += countVowels(str.substring(1));
  }
  return numVowels;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
  var sum = 0;
  if (n < 10) { // single digit
    return sum += n;
  } else {
    sum += n % 10
    return sum += recursiveSum(Math.floor(n / 10)); // drop last digit
  }
  return sum;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){
  if (n === 2) {
    return true;
  } else if (n < 2) {
    return false;
  } else {
    return isPowerOfTwo(n / 2.0);
  }
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, rate, years){
  if (years <= 0) {
    return amount;
  } else {
    amount += amount * rate;
    return invest(amount, rate, years - 1);
  }
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
  if (min > max) {
    return;
  }
  console.log(min)
  printRangeUpDown(min + 1, max);
  if (min !== max) {
    console.log(min)
  }
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

class Tree {
  constructor (value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

var tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4)
tree.left.left.left = new Tree(5)
tree.left.left.right = new Tree(6)

var binaryTreeSum = function(tree){
  var sum = 0;
  sum += tree.value;
  for (var key in tree) {
    if (key !== 'value' && tree[key]) {
      sum += binaryTreeSum(tree[key]);
    }
  }
  return sum;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};
