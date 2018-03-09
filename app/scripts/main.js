console.log('\'Allo \'Allo!');
var http = require('http');
http.createServer(function(req,res){
    res.write('hello');
    res.end;
});