import { IPostRepository } from '../../../repositories/interfaces/IPostRepository';

interface IRequest {
    id: string
}

export class DeletePostUseCase {
    constructor(private postRepository: IPostRepository) {}
    execute({ id }: IRequest) {
        return this.postRepository.delete(id);
    }
}
