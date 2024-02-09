import {
    TypePostViewModel
} from "../../input-output-types/inputOutputTypes";
import {db} from "../../main/app";

export const testingRepository ={

    deleteAll() {
       db.posts.splice(0, db.posts.length);
       db.blogs.splice(0, db.blogs.length);
    }
}