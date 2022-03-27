import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/blog';

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(url);
}

export default mongoose;
