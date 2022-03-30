export class User extends Object {
	id: string;
	name: string;
	username: string;
	password: string;
	constructor(
		id: string = undefined,
		name: string = undefined,
		username: string = undefined,
		password: string = undefined
	) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
	}

	static toUser(obj: any): User {
		const user = new User();
		for (const key in obj) {
			if (user.hasOwnProperty(key)) {
				user[key] = obj[key];
			}
		}
		return user;
	}

	checkProperty() {
		delete this.id;
		for (const key in this) {
			if (
				this[key] === undefined ||
				typeof this[key] !== 'string' ||
				this[key].toString().trim() === ''
			) {
				return { key, state: false };
			}
		}
		return { key: null, state: true };
	}

	clearKeyword() {
		delete this.password;
		return this;
	}
}
