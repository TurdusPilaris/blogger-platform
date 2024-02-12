import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";
import {TypePostInputModelModel} from "../../input-output-types/inputOutputTypes";

export const putPostsController = async (req: Request<ParamsType, TypePostInputModelModel, any, any>, res: Response<any>) => {

    const foundPost = await postsRepository.findPost(req.params.id);
    if(!foundPost) {
        res.sendStatus(404);
        return;
    }

    await postsRepository.updatePost(foundPost, req.body);
    res
        .status(204)
        .send(foundPost);
}