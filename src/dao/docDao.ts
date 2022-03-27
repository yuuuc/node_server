import mongoose from './config';
const { Schema } = mongoose;

const docSchema = new Schema({
	title: String,
	content: String,
	date: { type: Date, default: Date.now() }
});

const DocDao = mongoose.model('doc', docSchema);

export default DocDao;
