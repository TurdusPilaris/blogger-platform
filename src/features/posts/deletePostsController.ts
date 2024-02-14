import { Request, Response} from "express";
import {postsRepository} from "./postsRepository";
import {postsMongoRepository} from "./postMongoRepository";
import {ObjectId} from "mongodb";

export const deletePostsController = async (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    await postsMongoRepository.deletePost(new ObjectId(req.params.id));

    const foundedPost = await postsMongoRepository.find(new ObjectId(req.params.id));

    if(foundedPost) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204);
    return;

}