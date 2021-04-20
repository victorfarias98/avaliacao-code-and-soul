import { Post } from "../../models/Post";
import { IPostRepository, ICreatePostDTO, IUpdatePostDTO } from "../interfaces/IPostRepository";
class PostRepository implements IPostRepository{
    private static INSTANCE: PostRepository;
    private constructor() {}
    create({ title, content }: ICreatePostDTO): void {
        throw new Error("Method not implemented.");
    }
    list() {
        return Post.find({}).lean();
    }
    update({ id, title, content }: IUpdatePostDTO) {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    findById(id: string) {
        throw new Error("Method not implemented.");
    }
    findByTitle(title: string) {
        throw new Error("Method not implemented.");
    }
    public static getInstance(): PostRepository {
        if (!PostRepository.INSTANCE) {
            PostRepository.INSTANCE = new PostRepository();
        }
        return PostRepository.INSTANCE;
    }
   
}

export default PostRepository.getInstance();