import { IPostRepository } from '../../../repositories/interfaces/IPostRepository';


export class ListPostUseCase {
    constructor(private postRepository: IPostRepository) {}
    execute(): [] {
        return this.postRepository.list();
    }
}
