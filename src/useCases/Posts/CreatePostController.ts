import { Request, Response } from 'express';

import { CreatePostUseCases } from './CreatePostUseCases';

export class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCases) {}
    handle(request: Request, response: Response): Response {
        const { title, content } = request.body;
        this.createPostUseCase.execute({ title, content });
        return response.status(201).send();
    }
}
