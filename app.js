var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path')
var app = express();

var publicDir = require('path').join(__dirname);
app.use(express.static(publicDir));

app.get('/', function(req,res){
  res.sendFile(__dirname + "/main.html")
});
app.get('/survey.html', function(req,res){
  res.sendFile(__dirname + "/survey.html")
});
app.get('/tributepage.html', function(req,res){
  res.sendFile(__dirname + "/tributepage.html")
});
app.get('/productlanding.html', function(req,res){
  res.sendFile(__dirname + "/productlanding.html")
});
app.get('/techdocumentation.html', function(req,res){
  res.sendFile(__dirname + "/techdocumentation.html")
});

app.listen(3000);
console.log('ok listening');
