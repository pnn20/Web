// Web Server
var http = require('http');
var server = http.createServer();

var host = '172.30.1.30';
var port = 3000;
server.listen(port, host, '50000', function() {
    console.log('Web Server Started : %s, %d', host, port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('client connected : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1> From Node JS Page </h1>");
    res.write("</body>");
    res.write("</html>");    
});

server.on('close', function() {
    console.log('server close');
});