/**
 * Module dependencies.
 */

var express = require('express');
var Database = require('./Modules/database').Database;
var ObjectID = require('mongodb').ObjectID;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { pretty: true });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "JAFB SecretPass"}));  
  //app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var Database = new Database('testDB','localhost', 27017,function(err){
	if(err) console.log(err);
});
// Routes

app.get('/', function(req, res){
    if(req.session.auth)
      res.redirect('/main');
    res.render('index.jade', { 
      locals: {
      title: 'Calgary Emergency Medicine',
      }
    });
});
app.get('/main', function(req, res) {
    if(req.session.auth){
	res.render('jsmain.jade',{ locals: {
	  title: 'JS test'
	}
	});      
    }
    else res.redirect('/');
});
app.put('/users/:id', function(req, res) {
    console.log("PUT request: " + req.param('_id'));
	console.log(req.body);
	res.contentType('json');
	Database.update('userCollection',req.param('_id'),{
		name: req.param('name'),
		email: req.param('email')
		}, function(err) {
			if(err) console.log(err);
			else res.json({success: true});
	});
});

app.get('/users', function(req, res) {
	Database.findAll('userCollection', function(err, docs){
		if (err) console.log(err);
		else{
			res.contentType('json');
			res.json({
				success: true,
				data: docs
			});
		}
	});
});
app.get('/session', function(req, res){
	res.contentType('json');
	if(req.session.auth){
	  res.json({
	    success: true,
	    data: {
	      username: req.session.username,
	      admin: req.session.admin
	    }
	  });
	}else{
	  res.json({
	    failure: true
	  });
	}
});

app.post('/login', function(req, res) {
	Database.findOne('userCollection',{userid:req.param('userid')}, function(err, docs){
		res.contentType('json');
		if (err){//Database Error
			console.log(err);
			req.send("500 Internal Server Error",500);
		}else if(docs==null){
			res.json({
				failure: true
			});
		}else if(req.param('password')==docs.password){
			req.session.auth = true;
			req.session.username = docs.username;
			req.session.admin = docs.admin;
			res.json({
				success: true
			});
		}else{
			res.json({
				failure: true
			});
		}
	});

});

app.get('/logout', function(req, res){
  req.session.destroy();
  res.contentType('json');
  res.json({success: true});
});
  
  
app.listen(10020);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
