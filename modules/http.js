const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('New request');
  console.log(req.url);

  switch (req.url) {
    case '/hello':
      res.write('Hey! How is going ?');
      res.end();
      break;
    default:
      res.write('404 Not found: What are you looking for ?');
      res.end();
  }
}

console.log(`Listening on port ${3000}`);
