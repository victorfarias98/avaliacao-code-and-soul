import  PostRepository  from '../../../repositories/implementations/PostRepository';
import { UpdatePostController } from './UpdatePostController';
import { UpdatePostUseCase } from './UpdatePostUseCase';

const updatePostUseCase = new UpdatePostUseCase(PostRepository);
const updatePostController = new UpdatePostController(updatePostUseCase);

export { updatePostController };
