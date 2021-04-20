import  PostRepository  from '../../../repositories/implementations/PostRepository';
import { ListPostController } from './ListPostController';
import { ListPostUseCase } from './ListPostUseCase';

const listPostUseCase = new ListPostUseCase(PostRepository);
const listPostController = new ListPostController(listPostUseCase);

export { listPostController };
