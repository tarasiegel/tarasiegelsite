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



var jsonObj = require("./public/js/data.json");

var designData = jsonObj.design;
var designData = Object.keys(designData).map(function (key) { return designData[key] });

var codeData = jsonObj.codeProjects;
var codeData = Object.keys(codeData).map(function (key) { return codeData[key] });

// Parse.initialize("7TmB0Eg1i2GPrE6wYAhzCjyeTAUeu7HhcKTawhSk", "1zg8wOld5UyYXqozyTcIIkZI8yWwY0MlT7cH2G6q");

// var designInfo = Parse.Object.extend("design");
// var query = new Parse.Query(designInfo);
// var designData = {};
// query.find({
//   	success: function(results) {
//   		console.log(results);
//   		designData = results;
// 	},
// 	error: function(error) {
// 		console.log("Error: " + error.code + " " + error.message);
// 	}
// });


app.get('/', function(req, res){
  res.render('pages/index');
});

app.get('/about', function(req, res){
  res.render('pages/about');
});

app.get('/design', function(req, res){
	res.render('pages/design', { designData: designData});
});

app.get('/code', function(req, res){
	res.render('pages/code', { codeData: codeData});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});