
import { Router } from 'express';
import PostRepository  from '../repositories/implementations/PostRepository';
import { createPostController } from '../useCases/Posts/CreatePosts';
const postRouter = Router();

postRouter.get('/', async (req, res) => {
    const posts = await PostRepository.list();
    res.json(posts);
});
postRouter.post('/', async (req, res) => {
    createPostController.handle(req, res);
})
export { postRouter };