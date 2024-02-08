import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";

export const getBlogsControllerByID = (req: Request<any, any, any, any>, res: Response<any>) => {

    const foundBlog = blogsRepository.findBlog(req.params.id);
    if(!foundBlog) {
        res.sendStatus(404)
    }
    res
        .status(200)
         .send(foundBlog);

}