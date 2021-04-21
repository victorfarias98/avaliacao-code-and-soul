
import { Router } from 'express';
import { createPostController } from '../useCases/Posts/CreatePosts';
import { listPostController } from '../useCases/Posts/ListPosts';
import { updatePostController } from '../useCases/Posts/UpdatePosts';
import { deletePostController } from '../useCases/Posts/DeletePosts';
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
postRouter.delete('/:id', async (req, res) => {
    deletePostController.handle(req, res);
})
export { postRouter };