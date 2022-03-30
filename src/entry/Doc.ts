export class Doc extends Object {
	id: string;
	title: string;
	content: string;
	date: number;
	constructor(
		id: string = undefined,
		title: string = '',
		content: string = '',
		date: number = undefined
	) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;
	}

	static getDoc(body: Doc) {
		const doc = new Doc();
		for (const key in body) {
			if (doc.hasOwnProperty(key)) {
				doc[key] = body[key];
			}
		}
		return doc;
	}

	static toDocs(arr: any[]) {
		return arr.map((item) => {
			const doc = Doc.getDoc(item);
			return doc;
		});
	}

	checkProperty() {
		delete this.id;
		delete this.date;
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
