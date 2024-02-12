import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";

export const deletePostsController = async (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    const resultDelete = await postsRepository.deletePost(req.params.id);
    if (!resultDelete) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;

}