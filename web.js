var http = require('http');
var url = require('url');
var fs = require('fs');

// A simple web browser displaying files in /public
http.createServer(function(request, response) {
    var file = url.parse(request.url).pathname;
    file = file.substring(1);
    if (file.length == 0) {
        file = 'index.html';
    }
    file = 'public/' + file;

    console.log(request.method + ' ' + file);
    fs.readFile(file, function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.end(content, 'utf-8');
        }
    });
}).listen(8080);
