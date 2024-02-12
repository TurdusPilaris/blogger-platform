import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";

export const getPostsController = async (req: Request<any, any, any, any>, res: Response<any>) => {

    res
        .status(200)
        .send(await postsRepository.getAllPosts());

}