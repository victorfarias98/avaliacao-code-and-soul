import { v4 as uuidv4 } from 'uuid';
export class Post{
    id?: string;
    title : string;
    content: string;
    publish_date: Date;
    created_at: Date;
    constructor(){
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}