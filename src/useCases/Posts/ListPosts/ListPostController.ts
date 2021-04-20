import { Request, Response } from 'express';

import { ListPostUseCase } from './ListPostUseCase';

export class ListPostController {
    constructor(private listPostUseCase: ListPostUseCase) {}
    async handle(request: Request, response: Response) : Promise<Response> {
        const posts = await this.listPostUseCase.execute();
        return response.status(200).json(posts);
    }
}
