import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";
import {TypeBlogInputModel} from "../../input-output-types/inputOutputTypes";

export const postBlogsController = async (req: Request<ParamsType, TypeBlogInputModel, any, any>, res: Response<any>) => {

    const newBlog = await blogsRepository.create(req.body);

    res
        .status(201)
        .json(newBlog);



}