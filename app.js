var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/main.html').pipe(res);
  } else if(req.url === '/survey'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/survey.html').pipe(res);
  } else if(req.url === '/tributepage'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/tributepage.html').pipe(res);
  } else if(req.url === '/productlanding'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/productlanding.html').pipe(res);
  } else if(req.url === '/techdocumentation'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/techdocumentation.html').pipe(res);
  }
});


server.listen(3000);
console.log('ok listening');
