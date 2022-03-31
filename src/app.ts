import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app: Express = express();
import userApi from './api/userApi';
import docApi from './api/docApi';
import commonApi from './api/commonApi';
import { UserService } from './service/userService';
import Msg from './entry/Msg';

const filterArr = ['/doc/postDoc'];
const userService = new UserService();

function filter(req: Request, res: Response, next) {
	if (filterArr.includes(req.url)) {
		userService
			.findUserById(req.headers['token'])
			.then((res) => {
				if (res) {
					next();
				} else {
					return Promise.reject();
				}
			})
			.catch((err) => {
				res.statusCode = 401;
				res.json(Msg.fail('user not found', 'ng'));
			});
	} else {
		next();
	}
}

app.use(cors());
app.use(filter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', commonApi);
app.use('/doc', docApi);
app.use('/user', userApi);

app.listen(3000, () => {
	console.log('running....');
});
