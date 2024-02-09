import {body, validationResult} from "express-validator";
import {NextFunction, Response, Request} from "express";
import {postsRepository} from "../features/posts/postsRepository";
import {blogsRepository} from "../features/blogs/blogsRepository";

export const inputValidationMiddleware = (req:Request, res: Response, next: NextFunction): any => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({errorsMessages: errors.array().map((e: any) => {return {field: e.path, message: e.msg}})});
        return;
    } else {
        next();
    }
}

export const postInputValidator =
    [
        body('title').trim().isString(),
        body('content').trim().isLength({min: 0, max: 1000}),
        body('blogId').custom(async (blogId) => {
            await postsRepository.find(blogId)
}) ,
    ]

export const postInputValidatorBlog =
    [
        body('name').trim().isLength({min: 3, max: 15}).withMessage('Name should be from 3 to 15'),
        body('description').trim().isLength({min: 1, max: 500}).withMessage('Name should be from 1 to 500'),
        body('websiteUrl').isURL().withMessage('Is not URL'),

    ]
// export const customBlogIdMiddleware = (req:Request, res: Response, next: NextFunction) => {
//
//     if(!req.body.blogId){
//         return;
//     } else {
//     body('blogId').custom(async value => {
//         const foundBlog = await blogsRepository.find(value)
//         if(!foundBlog) {
//             throw new Error('Blog not found')
//         }
//     })}
// }

export const customBlogIdMiddleware =

        body('blogId').custom(async value => {
            const foundBlog = await blogsRepository.find(value)
            if(!foundBlog) {
                throw new Error('Blog not found')
            }
        });


export const titleValidation = body('title').trim().isLength({min: 3, max: 30}).withMessage('Field should be from 3 to 30');
export const postInputValidatorPost =

    [
         body('title').trim().isLength({min: 3, max: 30}).withMessage('Field should be from 3 to 30'),
        // titleValidation,
        body('shortDescription').trim().isLength({min: 1, max: 100}).withMessage('Field should be from 1 to 100'),
        body('content').trim().isLength({min: 1, max: 1000}).withMessage('Field should be from 1 to 1000'),
        body('blogId').custom(async value => {
            if(value) {
            const foundBlog = await blogsRepository.find(value)
            if(!foundBlog) {
                throw new Error('Blog not found')
            }}
        })
        // customBlogIdMiddleware

    ]

const ADMIN_AUTH_BASE64 = 'Basic YWRtaW46cXdlcnR5';
export const authMiddleware = (req:Request, res: Response, next: NextFunction) => {

    if(!req.headers['authorization']) {
        res.sendStatus(401)
    } else {
        const auth: string = req.headers['authorization'];
        if(auth !== ADMIN_AUTH_BASE64){
            res.sendStatus(401)
        }

        next();
    }
}