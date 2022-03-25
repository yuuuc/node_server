import express, { Request, Response } from 'express';
const router = express.Router();
router.get('/getUser', async (request: Request, response: Response) => {
	const obj = { a: 1, b: 2 };
	response.json(obj);
});

export default router;
