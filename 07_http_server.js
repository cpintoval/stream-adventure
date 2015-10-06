var through = require('through2');
var http = require('http');

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}
function end (done) { done(); }

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
      var stream = through(write, end);
      req.pipe(stream).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(process.argv[2]);


