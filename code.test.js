const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let key = 1; 


arr = [];
assert(numMatches(arr, key) == 0);

arr = [2];
assert(numMatches(arr, key) == 0);

arr = [1, 2, 1];
assert(numMatches(arr, key) == 2);

arr = [0, 2, 4, 7, 9];
assert(numMatches(arr, key) == 0);

arr = [1, 2, 3, 1, 6, 7, 1];
assert(numMatches(arr, key) == 3);
