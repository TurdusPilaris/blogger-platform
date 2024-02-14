import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";
import {postsMongoRepository} from "../posts/postMongoRepository";
import {ObjectId} from "mongodb";
import {blogsMongoRepository} from "./blogsMongoRepository";

export const deleteBlogsController = async (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    // const resultDelete = await blogsRepository.deleteBlog(req.params.id);
    // if (!resultDelete) {
    //     res.sendStatus(404);
    // }
    // res.sendStatus(204);
    // return;
    await blogsMongoRepository.deleteBlog(new ObjectId(req.params.id));

    const foundedBlog = await blogsMongoRepository.find(new ObjectId(req.params.id));

    if(foundedBlog) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204);
    return;

}