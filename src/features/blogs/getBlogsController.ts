import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";

export const getBlogsController = (req: Request<any, any, any, any>, res: Response<any>) => {

    res
        .status(200)
         .send(blogsRepository.getAllBlogs());

}