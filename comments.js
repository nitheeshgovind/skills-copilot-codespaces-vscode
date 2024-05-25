// create web server
// 1. Create a web server
// 2. Create a route
// 3. Create a response

// 1. Create a web server
const http = require('http');
const server = http.createServer();
server.listen(3000);

// 2. Create a route
server.on('request', (req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ comments: [] }));
    res.end();
  }
  else {
    res.writeHead(404);
    res.end();
  }
});
// 3. Create a response
// http://localhost:3000/comments
// GET /comments
// 200 OK
// Content-Type: application/json
// { "comments": [] }

// http://localhost:3000/unknown
// GET /unknown
// 404 Not Found