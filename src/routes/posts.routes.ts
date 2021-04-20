
import { Router } from 'express';
import PostRepository  from '../repositories/implementations/PostRepository';

const postRouter = Router();

postRouter.get('/', async (req, res) => {
    const posts = await PostRepository.list();
    res.json(posts);
});

export { postRouter };