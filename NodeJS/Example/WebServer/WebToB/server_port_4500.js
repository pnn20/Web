const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            res.end(data);
        })
    }
});

server.listen(4500);