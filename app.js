var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var queryData = url.parse(req.url, true);
    if (queryData.pathname === '/') {
        res.writeHead(200);
        res.end('Welcome to calc! Allowed operations are add, subtract, multiple.');
    }
    else if (queryData.pathname === '/add')
    {
        var data = {
            a: queryData.query.a,
            b: queryData.query.b,
            operand: 'add',
            result: Number(queryData.query.a) + Number(queryData.query.b)
        };
    
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(data));
    }
    else if (queryData.pathname === '/subtract')
    {
        var data = {
            a: Number(queryData.query.a),
            b: Number(queryData.query.b),
            operand: 'subtract',
            result: Number(queryData.query.a) - Number(queryData.query.b)
        };
    
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(data));
    }
    else if (queryData.pathname === '/multiply')
    {
        var data = {
            a: queryData.query.a,
            b: queryData.query.b,
            operand: 'multiply',
            result: Number(queryData.query.a) * Number(queryData.query.b)
        };
    
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(data));
    }
    else
    {
        res.writeHead(404);
        res.end('Not found');
    }


}).listen(80);

console.log('Server running...');