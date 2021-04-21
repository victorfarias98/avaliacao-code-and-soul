
import { Router } from 'express';
import { createPostController } from '../useCases/Posts/CreatePosts';
import { listPostController } from '../useCases/Posts/ListPosts';
import { updatePostController } from '../useCases/Posts/UpdatePosts';
const postRouter = Router();

postRouter.get('/', async (req, res) => {
    listPostController.handle(req, res);
});
postRouter.post('/', async (req, res) => {
    createPostController.handle(req, res);
})
postRouter.put('/:id', async (req, res) => {
    updatePostController.handle(req, res);
})
export { postRouter };