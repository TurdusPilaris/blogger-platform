import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";
import {TypePostInputModelModel} from "../../input-output-types/inputOutputTypes";
import {ObjectId} from "mongodb";
import {postsMongoRepository} from "./postMongoRepository";

export const putPostsController = async (req: Request<ParamsType, TypePostInputModelModel, any, any>, res: Response<any>) => {

    // const foundPost = await postsRepository.findPost(req.params.id);
    // if(!foundPost) {
    //     res.sendStatus(404);
    //     return;
    // }

    await postsMongoRepository.updatePost(new ObjectId(req.params.id), req.body);
    const foundPost = await postsMongoRepository.find(new ObjectId(req.params.id));
    res
        .status(204)
        .send(foundPost);
}