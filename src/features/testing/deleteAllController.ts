import {Router, Request, Response} from "express";

export const deleteAllController = (req: Request<any, any, any, any>, res: Response<any>) => {

    // testingRepositories.deleteAllVideo();
    res.sendStatus(204);

}

