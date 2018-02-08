import * as express from 'express';
import * as path from 'path';

import { CLIENT_PATH } from '../config';

const router = express.Router();

router.get('*', function (request, response) {
	response.sendFile('index.html', { root: CLIENT_PATH });
});

export const routes = router;