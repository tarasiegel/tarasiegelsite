var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    swig = require('swig');

app.use(express.static(__dirname + '/public'));
app.engine('html', swig.renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res){
  res.render('pages/index');
});

app.get('/about', function(req, res){
  res.render('pages/about');
});

app.get('/art', function(req, res){
  res.render('pages/art');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

