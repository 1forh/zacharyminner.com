import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as pjson from 'pjson';
import * as chalk from 'chalk';

import { routes } from './routes';
import { DEFAULT_PORT, CLIENT_PATH } from './config';

const app = <any>express();

console.info(chalk.cyan(`Application Version: ${pjson.version}`));

app.set('port', DEFAULT_PORT);

app.use(cors());
app.use(express.static(CLIENT_PATH));
app.use(routes);

app.listen(app.get('port'), () => console.log(chalk.green(`Express running on port: ${DEFAULT_PORT}`)));