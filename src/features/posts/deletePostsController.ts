import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";

export const deletePostsController = (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    if (!postsRepository.deletePost(req.params.id)) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;

}