var meses = require('./meses');
let num = 5;

console.log(meses(num));

const integerLimit = require('integer-limit');

let integer;
integer = integerLimit(); // Get current integer limit
//=>9223372036854776000
console.log(integer);

integer = integerLimit(32); // Get integer limit for 32 bits
//=> 2147483648
console.log(integer);

integer = integerLimit(64); // Get integer limit for 64 bits
//=> 9223372036854776000
console.log(integer);

integer = integerLimit(64, { bigint: true }); // Get integer limit 64 bits as a bigint
//=> 9223372036854775808n
console.log(integer);

const stringLength = require('string-length');

let fakeLength = '🐴'.length;
//=> 2

stringLength('🐴');
//=> 1

let length = stringLength('\u001B[1municorn\u001B[22m');
//=> 7
console.log(fakeLength);
console.log(length);
