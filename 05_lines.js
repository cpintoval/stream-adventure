var through = require('through2');
var split = require('split');
var stream = through(write, end);

var lineCount = 0;

function write (buffer, encoding, next) {
  var line = buffer.toString();
  if (lineCount % 2 == 0) {
    this.push(line.toLowerCase() + '\n');
  }
  else {
    this.push(line.toUpperCase() + '\n');
  }
  lineCount ++;
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);