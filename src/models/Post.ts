import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true},
    content: { type: String, required: true }
},
{
     timestamps: true 
}
);

const Post = mongoose.model('Post', postSchema);
export { Post }
