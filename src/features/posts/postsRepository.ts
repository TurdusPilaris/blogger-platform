import {TypeBlogViewModel, TypePostViewModel} from "../../input-output-types/inputOutputTypes";
import {db} from "../../main/app";
import {blogsRepository} from "../blogs/blogsRepository";
import {TypeBD} from "../../db/db";

export const postsRepository ={
    async create(input: any) {

        // { input
        //     "title": "string",
        //     "shortDescription": "string",
        //     "content": "string",
        //     "blogId": "string"
        // }
        const newPost: TypePostViewModel = {
            ...input,
            id: Date.now() + Math.random(),
            blogName: 'fgdfg',
        }
        db.posts.push(newPost);
        return newPost.id;
    },
    async find(id: string) {
        const foundPost = db.posts.find(p => p.id === id);
        return foundPost;
    },
    async findForOutput(id: string) {
        const foundPost = db.posts.find(p => p.id === id);
        if(!foundPost) {return undefined}
        return this.mapToOutput(foundPost);
    },
    mapToOutput(post: TypePostViewModel) {
        return {
            id: post.id,
            title: post.title

        }
    },
    getAllPosts():TypePostViewModel[]  {
        return db.posts;
    },
    deletePost(id:string): string|undefined {

        for(let i=0; i < db.posts.length; i++) {
            if (db.posts[i].id === id) {
                db.posts.splice(i, 1);
                return id;
            }
        }

        return undefined;

    },
    findPost(id: string):TypePostViewModel| undefined  {
        const foundPost = db.posts.find(a => a.id === id);
        return foundPost;
    }

}