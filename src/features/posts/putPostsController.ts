import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";
import {TypePostInputModelModel} from "../../input-output-types/inputOutputTypes";
import {blogsRepository} from "../blogs/blogsRepository";


export const putPostsController = (req: Request<ParamsType, TypePostInputModelModel, any, any>, res: Response<any>) => {

    // const newPost = postsRepository.create(req.body);
    //
    // res
    //     .status(201)
    //      .send(newPost);
    const foundPost = postsRepository.findPost(req.params.id);
    if(!foundPost) {
        res.sendStatus(404);
        return;
    }

    postsRepository.updatePost(foundPost, req.body);
    res
        .status(204)
        .send(foundPost);
}