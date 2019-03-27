var express = require('express'), http = require('http'), path = require('path');
var static = require('serve-static'), bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'), expressSession = require('express-session');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

var router = express.Router();
router.route('/process/product').get(function(req, res) {
    console.log('/process/product');
    
    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login2.html');
    }
});

app.use('/', router);

router.route('/process/login').post(function(req, res) {
    console.log('/process/login');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if (req.session.user) {
        console.log('session okay. Enter Product Page');
        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            authorized: true
        };

        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h1>login complete</h1>');
        res.write('<div><p>Param id : ' + paramId + '</p></div>');
        res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
        res.write("<br><br><a href='/process/product'> go to product page </a>");
        res.end();
    }
});

router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout');

    if (req.session.user) {
        console.log('logout');
        req.session.destroy(function(err) {
            if (err) {throw err;}
            console.log('session delete & logout');
            res.redirect('/public/login2.html');
        });
    } else {
        console.log("you're not in login");
        res.redirect('/public/login2.html');
    }
});

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function() {
    console.log('express server started : ' + app.get('port'));
});