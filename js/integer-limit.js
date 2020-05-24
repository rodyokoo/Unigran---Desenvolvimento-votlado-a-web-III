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
