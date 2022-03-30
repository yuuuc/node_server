export class Login {
	username: string;
	password: string;

	constructor(username: string = undefined, password: string = undefined) {
		this.username = username;
		this.password = password;
	}
}
