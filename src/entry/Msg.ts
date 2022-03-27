export default class Msg {
	data: object = null;
	error: string = '';
	message: string = '';
	constructor() {}
	static success(data, message) {
		const msg = new Msg();
		msg.data = data;
		msg.message = message;
		return msg;
	}
	static fail(error, message) {
		const msg = new Msg();
		msg.error = error;
		msg.message = message;
		return msg;
	}
}
