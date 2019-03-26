var static = require('serve-static');
var express = require('express'), http = require('http');
var path = require('path');

var app = express();
app.use('/public', static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end("<img src='/public/city_night.PNG' width='50%'>");
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('express server started : ' + app.get('port'));
});