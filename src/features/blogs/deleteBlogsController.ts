import { Request, Response} from "express";
import {blogsRepository} from "./blogsRepository";

export const deleteBlogsController = (req: Request<ParamsType, any, any, any >, res: Response<any>) => {

    if (!blogsRepository.deleteBlog(req.params.id)) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;

}