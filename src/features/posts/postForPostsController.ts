import { Request, Response} from "express";
import {TypeBlogInputModel} from "../../input-output-types/inputOutputTypes";
import {postsRepository} from "./postsRepository";

export const postForPostsController = async (req: Request<TypeBlogInputModel, any, any, any>, res: Response<any>) => {

    const newPost = await postsRepository.create(req.body);

    res
        .status(201)
         .send(newPost);

}