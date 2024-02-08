import {TypeBlogViewModel, TypePostViewModel} from "../../input-output-types/inputOutputTypes";
import {db} from "../../main/app";

export const blogsRepository ={
    async create(input: any) {

        // { input
        //     "title": "string",
        //     "shortDescription": "string",
        //     "content": "string",
        //     "blogId": "string"
        // }
        // const newBlog: TypeBlogViewModel = {
        //     // ...input,
        //     // id: Date.now() + Math.random(),
        //     // blogName: 'find name blog'
        // }
        // db.blogs.push(newPost);
        // return newPost;
    },

    async find(id:string):Promise<TypeBlogViewModel|undefined> {
        const foundBlog = db.blogs.find(b => b.id === id);
        return foundBlog;
    },
    getAllBlogs(): TypeBlogViewModel[] {
        return db.blogs;
    },

    deleteBlog(id:string): string|undefined {

        for(let i=0; i < db.blogs.length; i++) {
            if (db.blogs[i].id === id) {
                db.blogs.splice(i, 1);
                return id;
            }
        }

        return undefined;

    },
    findBlog(id: string):TypeBlogViewModel| undefined  {
        const foundBlog = db.blogs.find(a => a.id === id);
        return foundBlog;
    }
}