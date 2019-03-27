var express = require('express'), http = require('http'), path = require('path');
var static = require('serve-static'), bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());

var router = express.Router();
router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie');
    
    res.send(req.cookies);
});

router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie');
    
    res.cookie('user', {
        id: 'mike',
        name: '소녀시대',
        authorized: true
    });

    res.redirect('/process/showCookie');
});

app.use('/', router);

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function() {
    console.log('express server started : ' + app.get('port'));
});