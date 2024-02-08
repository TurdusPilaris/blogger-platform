import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";

export const getPostsController = (req: Request<any, any, any, any>, res: Response<any>) => {

    res
        .status(200)
        .send(postsRepository.getAllPosts());

}