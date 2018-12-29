var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/doc.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('ok listening');
