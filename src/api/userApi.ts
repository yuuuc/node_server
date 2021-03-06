/*
 * @Version:
 * @Company:
 * @Author: yu.chen
 * @Date: 2022/03/25
 * @Description:
 * @LastEditTime: 2022/03/29
 */
import express, { Request, Response } from 'express';
import Msg from '../entry/Msg';
import { User } from '../entry/User';
import { UserService } from '../service/userService';
const router = express.Router();

const userService = new UserService();

router.post('/postUser', (request: Request, response: Response) => {
	let msg;
	userService
		.insertUser(User.toUser(request.body))
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

export default router;
