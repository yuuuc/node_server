import mongoose from './config';
const { Schema } = mongoose;

const docSchema = new Schema({
	title: String,
	content: String,
	date: { type: Date, default: Date.now() }
});

// if (!(docSchema as any).options.toObject)
// 	(docSchema as any).options.toObject = {};
// (docSchema as any).options.toObject.transform = function (doc, ret, options) {
// 	// remove the _id of every document before returning the result
// 	ret.id = ret._id.toString();
// 	delete ret._id;
// 	return ret;
// };

const DocDao = mongoose.model('doc', docSchema);

export default DocDao;
