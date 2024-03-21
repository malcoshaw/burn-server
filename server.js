const http = require("http");
const port = process.env.PORT || 8000;
const html = `<header><h1>Hello, World!</h1></header>`;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(html);
  res.end();
}).listen(port, () => {
  console.log(`App running on port ${port}`);
});
