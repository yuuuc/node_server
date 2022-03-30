import DocDao from '../dao/docDao';
import { Doc } from '../entry/Doc';
export function DocIoc(
	target: any = null,
	name: any = null,
	descriptor: any = null
) {
	target = new DocService();
}
const OK = 'ok';

export class DocService {
	constructor() {}

	/**
	 * findAll
	 * @returns Promise
	 */
	findAll() {
		// 返回一个promise
		return new Promise((resolve, reject) => {
			DocDao.find({}, 'title')
				.sort({ date: 1 })
				.then((res) => {
					resolve(Doc.toDocs(res));
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	findByTitle(title) {
		if (title.toString().trim() === '') {
			return Promise.reject('title is null');
		}
		return new Promise((resolve, reject) => {
			DocDao.find({ title }, 'title')
				.then((res) => {
					resolve(Doc.toDocs(res));
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	findOneById(_id) {
		return new Promise((resolve, reject) => {
			DocDao.findById(_id)
				.then((res) => {
					resolve(Doc.getDoc(res));
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	/**
	 * saveOne
	 * @param body
	 * @returns Promise
	 */
	insertOne(body: Doc) {
		const doc: Doc = Doc.getDoc(body);
		const res = doc.checkProperty();
		if (res.state) {
			// 创建model对象
			const data = new DocDao(doc);
			return new Promise((resolve, reject) => {
				data.save(function (err) {
					if (err) {
						reject(err);
					} else {
						resolve(OK);
					}
				});
			});
		} else {
			return Promise.reject(`${res.key} is null`);
		}
	}

	/**
	 * updateOne
	 * @param body
	 * @returns Promise
	 */
	updateOne(body: Doc) {
		if (body.id.trim() === '') {
			return Promise.reject('id is null');
		}
		const doc: Doc = Doc.updateDoc(body);
		const res = doc.checkProperty();
		if (res.state) {
			doc.date = Date.now();
			return new Promise((resolve, reject) => {
				DocDao.updateOne({ _id: body.id }, doc, (err) => {
					if (err) {
						reject(err);
					} else {
						resolve(OK);
					}
				});
			});
		} else {
			return Promise.reject(`${res.key} is null`);
		}
	}
}
