import {body, validationResult} from "express-validator";
import {NextFunction, Response, Request} from "express";
import {postsRepository} from "../features/posts/postsRepository";

export const inputValidationMiddleware = (req:Request, res: Response, next: NextFunction): any => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
        return;
    } else {
        next();
    }
}

export const postInputValidator =
    [
        body('title').isString(),
        body('content').isLength({min: 0, max: 1000}),
        body('blogId').custom(async (blogId) => {
            await postsRepository.find(blogId)
}) ,
    ]


export const validationPostVideos = () =>{ body('title').isLength({min: 3, max:10}).withMessage('Title length should be from 3 to 10 symbols.')};

// const ADMIN_AUTH_BASE64 = 'admin:qwerty'
const ADMIN_AUTH_BASE64 = 'Basic YWRtaW46cXdlcnR5';
export const authMiddleware = (req:Request, res: Response, next: NextFunction) => {

    if(!req.headers['authorization']) {
        res.sendStatus(401)
    } else {
        const auth: string = req.headers['authorization'];
        // let buff = new Buffer(auth.slice(5), 'base64');
        // let decodedAuth = buff.toString('ascii');
        if(auth !== ADMIN_AUTH_BASE64){
            res.sendStatus(401)
        }

        next();
    }
}