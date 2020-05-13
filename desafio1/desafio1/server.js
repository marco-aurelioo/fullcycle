var http = require('http'); 

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('Maratona Full Cycle 2.0');
        res.end();
    
    }else
        res.end('Invalid Request!');
});

server.listen(3000);

console.log('Node.js web server at port 5000 is running..')