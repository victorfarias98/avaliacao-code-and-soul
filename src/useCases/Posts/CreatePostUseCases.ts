import { IPostRepository } from '../../repositories/interfaces/IPostRepository';

interface IRequest {
    title: string;
    content: string;
}

export class CreatePostUseCases {
    constructor(private postRepository: IPostRepository) {}
    execute({ title, content }: IRequest): void {
        const postAlreadyExists = this.postRepository.findByTitle(title);
        if (postAlreadyExists) {
            throw new Error('Post já existente');
        }
        this.postRepository.create({ title, content });
    }
}
