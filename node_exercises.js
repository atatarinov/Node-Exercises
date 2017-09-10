//1. Hello World
// console.log("HELLO WORLD");

//2. Baby Steps
// let sum = 0; 
// for(let i = 2; i < process.argv.length; i++) {
//   sum += Number.parseInt(process.argv[i]);
// }
// console.log(sum);

//3. My First I/O
// var fs = require('fs');

// var buffer = fs.readFileSync(process.argv[2]);
// var number = buffer.toString().split('\n').length -1;
// console.log(number);

//4. My First Async I/O
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, contents) {
  if (err) {
    return console.log(err);
  }
  var number = contents.toString().split('\n').length -1;
  console.log(number);
})



