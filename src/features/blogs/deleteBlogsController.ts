import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";

export const deleteBlogsController = async (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    const resultDelete = await blogsRepository.deleteBlog(req.params.id);
    if (!resultDelete) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;

}