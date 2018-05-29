const express	= require('express');
const bodyParser = require('body-parser');
const app	= express();
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("rafael.db")

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
	db.all('SELECT teachers.name, teachers.subject, schools.name as school FROM teachers INNER JOIN schools ON schools.ID=teachers.schoolID UNION SELECT teachers.name, teachers.subject, teachers.schoolID as school FROM teachers WHERE teachers.schoolID IS NULL', function(err, ans) {
		res.render('teachers', {data: ans});
	})
});
app.get('/teachers/schools',function(req,res){
	db.all('SELECT * FROM schools', function(err, ans) {
		if (ans) temp=true
		else temp=false
		res.render('schools', {data: ans, result: temp, result2: false});
	})
});
app.get('/teachers/subjects',function(req,res){
	db.all("SELECT DISTINCT subject FROM teachers", function(err, ans) {
		if(ans) temp=true
		else temp=false
		res.render('subjects', {data: ans, result: temp, result2: false});
	})
});
app.get('/teachers/search',function(req,res){
	res.render('search', {result: false});
});

app.get('/back/subjects/:str',function(req,res){
	subjectName = req.params.str
	db.all("SELECT teachers.name FROM teachers WHERE teachers.subject="+'"'+subjectName+'"', function(err, ans) {
		if(ans) temp=true
		else temp=false
		res.render('schools', {data: ans, result: false, result2: temp});
	})
});
app.get('/back/schools/:str',function(req,res){
	schoolName = req.params.str
	db.all("SELECT schools.ID, teachers.name FROM schools INNER JOIN teachers ON schools.ID = teachers.schoolID and schools.name = "+'"'+schoolName+'"', function(err, ans) {
		if(ans) temp=true
		else temp=false
		res.render('schools', {data: ans, result: false, result2: temp});
	})
});
app.get('/back/search/:name', function(req,res) {
	searchName = req.params.name
	console.log("SELECT name FROM teachers WHERE name LIKE "+"%"+searchName+"%")
	db.all("SELECT name FROM teachers WHERE name LIKE "+'"'+"%"+searchName+"%"+'"', function(err, ans) {
		console.log(ans)
		if(ans) temp=true
		else temp=false
		res.render('search', {data: ans, result: temp});
	})
})

app.listen(3000,function(){
	console.log("App Started on PORT 3000");
	console.log("http://localhost:3000")
});