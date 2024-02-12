import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";
import {blogsRepository} from "../blogs/blogsRepository";

export const getPostsControllerByID = async (req: Request<any, any, any, any>, res: Response<any>) => {

    const foundPost = await postsRepository.findPost(req.params.id);
    if(!foundPost) {
        res.sendStatus(404)
    }
    res
        .status(200)
        .send(foundPost);

}