import  PostRepository  from '../../../repositories/implementations/PostRepository';
import { CreatePostController } from './CreatePostController';
import { CreatePostUseCase } from './CreatePostUseCase';

const createPostUseCase = new CreatePostUseCase(PostRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostController };
