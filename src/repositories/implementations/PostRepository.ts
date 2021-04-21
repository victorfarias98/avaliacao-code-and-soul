import { Post } from "../../models/Post";
import { IPostRepository, ICreatePostDTO, IUpdatePostDTO } from "../interfaces/IPostRepository";
class PostRepository implements IPostRepository{
    private static INSTANCE: PostRepository;
    private constructor() {}
    async create({ title, content }: ICreatePostDTO){
        const post = await Post.create({ title, content }, function (err, doc) {
            if (err){
                throw new Error("Erro ao cadastrar este post " + err);
            };
            return doc['_doc'];
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
            return doc['_doc'];
        }});
        return post;
    }
    async delete(id: string){
        await Post.findOneAndDelete({_id: id});
        const yetExistPost = Post.findOne({_id: id});
        if(yetExistPost){
            return true;
        }
        return false;
    }
    public static getInstance(): PostRepository {
        if (!PostRepository.INSTANCE) {
            PostRepository.INSTANCE = new PostRepository();
        }
        return PostRepository.INSTANCE;
    }
   
}

export default PostRepository.getInstance();