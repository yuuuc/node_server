/*
 * @Version:
 * @Company:
 * @Author: yu.chen
 * @Date: 2022/03/25
 * @Description:
 * @LastEditTime: 2022/03/31
 */
import express, { Request, Response } from 'express';
import { UserService } from '../service/userService';
import Msg from '../entry/Msg';
const router = express.Router();

const userService = new UserService();

router.post('/login', (request: Request, response: Response) => {
	let msg;
	userService
		.findUserByUsernameAndPassword(request.body)
		.then((res) => {
			response.statusCode = 200;
			msg = Msg.success(res.clearKeyword(), 'ok');
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
