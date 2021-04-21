import { Post } from "../../models/Post";
import { IPostRepository, ICreatePostDTO, IUpdatePostDTO } from "../interfaces/IPostRepository";
class PostRepository implements IPostRepository{
    private static INSTANCE: PostRepository;
    private constructor() {}
    async create({ title, content }: ICreatePostDTO){
        const post = await Post.create({ title, content }, function (err, small) {
            if (err){
                throw new Error("Erro ao cadastrar este post " + err);
            };
        });
        return post;
    }
    list() {
        return Post.find({}).lean();
    }
    async update({ id, title, content }: IUpdatePostDTO) {
        const post = await Post.findOneAndUpdate({ _id : id }, { $set : { title: title, content: content},  function (err, doc)  {
            if (err){
                return new Error("Erro ao atualizar este post " + err);
            }
            return doc;
        }});
        return post['_doc'];
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    findById(id: string) {
        throw new Error("Method not implemented.");
    }
    findByTitle(title: string){
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