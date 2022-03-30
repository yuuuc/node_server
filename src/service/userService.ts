import UserDao from '../dao/userDao';
import { Login } from '../entry/Login';
import { User } from '../entry/User';
import md5 from 'md5';
const salt = 'helloworld'; // md5 加密加盐

const OK = 'ok';

export class UserService {
	constructor() {}
	findUserByUsernameAndPassword(login: Login): Promise<User> {
		login.password = md5(login.password + salt);
		return new Promise((resolve, reject) => {
			UserDao.findOne(login)
				.then((res) => {
					resolve(User.toUser(res));
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	insertUser(user: User): Promise<string> {
		const res = user.checkProperty();
		if (res.state) {
			user.password = md5(user.password + salt);
			return new Promise((resolve, reject) => {
				const userDoc = new UserDao(user);
				userDoc.save(function (err) {
					if (err) {
						reject(err);
					} else {
						resolve(OK);
					}
				});
			});
		} else {
			return Promise.reject(`参数 ${res.key} 存在问题`);
		}
	}
}
