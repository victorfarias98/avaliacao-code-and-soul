import { Post } from "../../models/Post";

interface ICreatePostDTO {
    title: string;
    content: string;
}
interface IUpdatePostDTO {
    id: string;
    title: string;
    content: string;
}
export interface IPostController {
    create({title, content} : ICreatePostDTO) : void  ;
    update({ id, title,content} : IUpdatePostDTO ): Post;
    list() : Post[];
    delete(id: string): void;
    findById(id: string): Post;
    findByTitle(title: string): Post;
}