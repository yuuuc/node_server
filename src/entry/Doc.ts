const map = { id: '_id', title: 'title', content: 'content' };

export class Doc {
	id?: string;
	title: string;
	content: string;
	date?: number;
	constructor(title: string = '', content: string = '') {
		this.title = title;
		this.content = content;
	}

	static getDoc(body: Doc) {
		const doc = new Doc();
		for (const key in body) {
			doc[key] = body[key];
		}
		return doc;
	}

	checkProperty() {
		for (const key in this) {
			if (this[key].toString().trim() == '') {
				return { key, state: false };
			}
		}
		return { state: true };
	}

	static updateDoc(body: Doc) {
		const doc = new Doc();
		doc.content = body.content;
		doc.title = body.title;
		return doc;
	}
}
