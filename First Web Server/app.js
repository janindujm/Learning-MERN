const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res)  {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('404 Not Found');
      res.end();
    } else {
      res.write(data);
      res.end();
    }
    res.end();
  });
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something bad happened', error);
  } else {
    console.log(`Server is listening on ${port}`);
  }
}
)