import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";
import {TypeBlogInputModel} from "../../input-output-types/inputOutputTypes";

export const putBlogsController = async (req: Request<ParamsType, TypeBlogInputModel,  any, any>, res: Response<any>) => {

    const foundBlog =  await blogsRepository.findBlog(req.params.id);
    if(!foundBlog) {
        res.sendStatus(404);
        return;
    }

    await blogsRepository.updateBlog(foundBlog, req.body);
    res
        .status(204)
        .send(foundBlog);
}