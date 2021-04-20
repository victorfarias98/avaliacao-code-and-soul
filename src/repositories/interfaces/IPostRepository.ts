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
 interface IPostRepository {
    create({title, content} : ICreatePostDTO) : void  ;
    update({ id, title,content} : IUpdatePostDTO );
    list();
    delete(id: string): void;
    findById(id: string);
    findByTitle(title: string);
}

export { ICreatePostDTO, IUpdatePostDTO, IPostRepository }