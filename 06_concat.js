var through = require('through2');
var stream = through(write, end);

function write (buffer, encoding, next) {
  this.push(buffer.toString().split('').reverse().join(''));
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);


// Using concat-stream
// var concat = require('concat-stream');
  
// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));