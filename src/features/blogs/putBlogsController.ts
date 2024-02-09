import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";
import {TypeBlogInputModel} from "../../input-output-types/inputOutputTypes";

export const putBlogsController = (req: Request<ParamsType, TypeBlogInputModel,  any, any>, res: Response<any>) => {

    const foundBlog = blogsRepository.findBlog(req.params.id);
    if(!foundBlog) {
        res.sendStatus(404);
        return;
    }

    blogsRepository.updateBlog(foundBlog, req.body);
    res
        .status(204)
        .send(foundBlog);
}