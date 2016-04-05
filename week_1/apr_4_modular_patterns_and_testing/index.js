const frog = require(__dirname + '/frog');
const frog2 = require(__dirname + '/frog2');
const Frog3 = require(__dirname + '/frog3');

console.log(frog());

console.log(__dirname);
console.log(__filename);

debugger;
console.log(frog2.ribbit());

const froggy = new Frog3();
console.log(froggy.ribbit());
