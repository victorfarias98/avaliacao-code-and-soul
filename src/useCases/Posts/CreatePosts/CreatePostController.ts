import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) {}
    handle(request: Request, response: Response): Response {
        const { title, content } = request.body;
        this.createPostUseCase.execute({ title, content });
        return response.status(201).send();
    }
}
