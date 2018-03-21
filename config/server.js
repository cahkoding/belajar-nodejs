var http   = require('http');
var jsonfile = '{"Data" : [{"Developer" : ['+
                                '{"nama":"khihady","umur":"21"},'+
                                '{"nama":"khihady","umur":"21"}'+
                                ']},'+
               '{"Analyst"  : ['+
                                '{"nama":"john", "umur":"80"},'+
                                '{"nama":"banse","umur":"72","skill":"noob"}'+
                              ']}]}';
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write('Hello <b>World</b>');
    res.write(jsonfile);
    res.end();
});
server.listen(8000);
console.log("server running on http://localhost:8000");
