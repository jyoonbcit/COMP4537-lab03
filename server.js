const message = require('./lang/en/message');
const utils = require('./modules/utils');
const dateUtils = new utils();
const http = require('http');
let url = require('url');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let qData = q.query;
    res.writeHead(200, {
        'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'
    });
    res.write(`${message.WELCOME}`.replace("%1", qData.name) + dateUtils.getDate());
    res.end();
}).listen(8000);

console.log('Server running at port 8000');

