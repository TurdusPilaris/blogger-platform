import {postsRepository} from "./postsRepository";
import {Response, Request} from 'express'

export const createPostController = async (req: Request, res: Response) =>{
    const idNewPost = await postsRepository.create(req.body);

    res
        .status(201);
        // .json(newPost);
}