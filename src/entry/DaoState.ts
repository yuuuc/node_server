export default class DaoState {
	state: boolean;
	error: any;
	constructor() {}
	static success() {
		const daoState = new DaoState();
		daoState.state = true;
		return daoState;
	}
	static fail(error) {
		const daoState = new DaoState();
		daoState.error = error;
		return daoState;
	}
}
