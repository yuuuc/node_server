import express, { Request, Response } from 'express';

import Msg from '../entry/Msg';
import { DocService } from '../service/docService';
const doc = express.Router();

const daoService = new DocService();

doc.get('/getDocs', (request: Request, response: Response) => {
	let msg;
	daoService
		.findAll()
		.then((res) => {
			response.statusCode = 200;
			msg = Msg.success(res, 'ok');
		})
		.catch((err) => {})
		.finally(() => {
			response.json(msg);
		});
});

/**
 * 获取文档数据
 */
doc.get('/getDoc/:id', async (request: Request, response: Response) => {
	const body = request.body;
	const query = request.query;
	const params = request.params;
	// console.log(query);
	// console.log(params);

	response.send(body);
	response.end();
});

doc.post('/postDoc', (request: Request, response: Response) => {
	let msg;
	daoService
		.insertOne(request.body)
		.then((res) => {
			response.statusCode = 200;
			msg = Msg.success(null, 'ok');
		})
		.catch((err) => {
			response.statusCode = 500;
			msg = Msg.fail(err, 'ng');
		})
		.finally(() => {
			response.json(msg);
		});
});

doc.post('/updateDoc', (request: Request, response: Response) => {
	let msg;
	daoService
		.updateOne(request.body)
		.then((res) => {
			response.statusCode = 200;
			msg = Msg.success(null, 'ok');
		})
		.catch((err) => {
			response.statusCode = 500;
			msg = Msg.fail(err, 'ng');
		})
		.finally(() => {
			response.json(msg);
		});
});

export default doc;
