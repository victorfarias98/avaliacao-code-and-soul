import  PostRepository  from '../../../repositories/implementations/PostRepository';
import { CreatePostController } from './CreatePostController';
import { CreatePostUseCases } from './CreatePostUseCases';

const createPostUseCase = new CreatePostUseCases(PostRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostController };
