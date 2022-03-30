import express, { Express } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app: Express = express();
import userApi from './api/userApi';
import docApi from './api/docApi';
import commonApi from './api/commonApi';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', commonApi);
app.use('/doc', docApi);
app.use('/user', userApi);

app.listen(3000, () => {
	console.log('running....');
});
