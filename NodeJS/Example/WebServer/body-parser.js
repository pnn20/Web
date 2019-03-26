var express = require('express'), http = require('http'), path = require('path');
var static = require('serve-static'), bodyParser = require('body-parser');


var app = express();
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.end();
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('express server started : ' + app.get('port'));
});