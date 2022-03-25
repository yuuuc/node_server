import express, { Express } from 'express';
import userApi from './api/userApi';
const app: Express = express();

app.use('/user', userApi);

app.listen(3000, () => {
	console.log('running....');
});
