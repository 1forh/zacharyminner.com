import express from 'express';
import path from 'path';

const app = express();

app.use(require('prerender-node'));

app.use(express.static(__dirname + '/dist'));

app.use(function(request, response, next) {
	response.set('Access-Control-Allow-Origin', '*');
	response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('*', function(request, response) {
	response.sendFile('index.html', { root: path.join(__dirname, './dist') });
});

app.listen(8080);
