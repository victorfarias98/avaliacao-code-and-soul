import  PostRepository  from '../../../repositories/implementations/PostRepository';
import { DeletePostController } from './DeletePostController';
import { DeletePostUseCase } from './DeletePostUseCase';

const deletePostUseCase = new DeletePostUseCase(PostRepository);
const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostController };
