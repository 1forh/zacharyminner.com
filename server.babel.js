import express from 'express';

const app = express();

app.use(require('prerender-node'));

app.use(express.static(__dirname + '/dist'));

app.use(function(request, response, next) {
	response.set('Access-Control-Allow-Origin', '*');
	response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('*', function(request, response) {
	response.sendFile('./dist/index.html');
});

app.listen(8080);
