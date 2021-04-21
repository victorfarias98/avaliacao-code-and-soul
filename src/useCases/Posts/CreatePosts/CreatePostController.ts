import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) {}
    async handle(request: Request, response: Response)  : Promise<Response>{
        const { title, content } = request.body;
        const post = await this.createPostUseCase.execute({ title, content });
        return response.status(201).json(post);
    }
}
