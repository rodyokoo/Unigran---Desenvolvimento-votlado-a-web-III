const stringLength = require('string-length');

let fakeLength = '🐴'.length;
//=> 2

stringLength('🐴');
//=> 1

let length = stringLength('\u001B[1municorn\u001B[22m');
//=> 7
console.log(fakeLength);
console.log(length);
