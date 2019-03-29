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

var MongoClient = require('mongodb').MongoClient;
var database;
function connectDB() {
    var databaseUrl = 'mongodb://localhost:27017/local';
    MongoClient.connect(databaseUrl, function(err, db) {
        if(err) throw err;

        database = db.db('local');
        // mongodb 3.0 이상에서는 사용할 database 명을 명시해야 한다.
    });
}

var router = express.Router();
router.route('/process/product').get(function(req, res) {
    console.log('/process/product');
    
    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login.html');
    }
});

app.use('/', router);

router.route('/process/login').post(function(req, res) {
    console.log('/process/login');

    var paramId = req.param('id');
    var paramPassword = req.param('password');

    if (database) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            if(err) {throw err;}

            if(docs) {
                console.dir(docs);
                var username = docs[0].name;
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>login complete</h1>');
                res.write('<div><p>Param id : ' + paramId + '</p></div>');
                res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
                res.write("<br><br><a href='/process/product'> go to product page </a>");
                res.end();
            } else {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>login failed</h1>');
                res.write("<br><br><a href='/public/login.html'>login</a>");
                res.end();
            }
        });
    }
});

router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout');

    if (req.session.user) {
        console.log('logout');
        req.session.destroy(function(err) {
            if (err) {throw err;}
            console.log('session delete & logout');
            res.redirect('/public/login.html');
        });
    } else {
        console.log("you're not in login");
        res.redirect('/public/login.html');
    }
});

var authUser = function(database, id, password, callback) {
    var users = database.collection('users');
    users.find({"id" : id, "password" : password}).toArray(function(err, docs) {
        if(err) {
            callback(err, null);
            return;
        }

        if(docs.length > 0) {
            console.log('Id [%s], password [%s]', id, password);
            callback(null, docs);
        } else {
            console.log('no ID');
            callback(null, null);
        }
    });
}

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function() {
    console.log('express server started : ' + app.get('port'));
    connectDB();
});