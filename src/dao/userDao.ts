import mongoose from './config';
const { Schema } = mongoose;

const userSchema = new Schema({
	name: String,
	username: String,
	password: String
});

export default mongoose.model('user', userSchema);
