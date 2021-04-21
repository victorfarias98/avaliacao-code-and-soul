import { Request, Response } from 'express';

import { UpdatePostUseCase } from './UpdatePostUseCase';

export class UpdatePostController {
    constructor(private updatePostUseCase: UpdatePostUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, content } = request.body;
        const { id } = request.params;
        const post = await this.updatePostUseCase.execute({ id , title, content });
        return response.status(201).json({ message: "Post atualizado com sucesso" , post } );
    }
}
