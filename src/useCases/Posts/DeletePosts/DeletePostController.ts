import { Request, Response } from 'express';

import { DeletePostUseCase } from './DeletePostUseCase';

export class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const result = await this.deletePostUseCase.execute({ id });
        if(result === false) {
            return response.status(400).json({ message: "Erro ao deletar Post, post inexistente" } );
        }
        return response.status(200).json({ message: "Post deletado com sucesso" } );
    }
}
