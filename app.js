var http = require('http');

http.createServer(function(req, res){
	//request, response
	res.writeHead(202,'You win'); //create header
	res.end('Executed OK'); //payload?
}).listen(80); //define listening port

console.log('Server started');