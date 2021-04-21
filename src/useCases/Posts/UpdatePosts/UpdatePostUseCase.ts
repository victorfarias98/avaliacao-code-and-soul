import { IPostRepository } from '../../../repositories/interfaces/IPostRepository';

interface IRequest {
    id: string
    title: string;
    content: string;
}

export class UpdatePostUseCase {
    constructor(private postRepository: IPostRepository) {}
    execute({ id, title, content }: IRequest) {
        return this.postRepository.update({ id, title, content });
    }
}
