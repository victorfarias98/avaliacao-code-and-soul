
import { Router } from 'express';
import { createPostController } from '../useCases/Posts/CreatePosts';
import { listPostController } from '../useCases/Posts/ListPosts';
const postRouter = Router();

postRouter.get('/', async (req, res) => {
    listPostController.handle(req, res);
});
postRouter.post('/', async (req, res) => {
    createPostController.handle(req, res);
})
export { postRouter };