import {Router} from "express";
import {getBlogsController} from "./getBlogsController";
import {deleteBlogsController} from "./deleteBlogsController";
import {getPostsController} from "../posts/getPostsController";
import {postsRouter} from "../posts";
import {
    authMiddleware,
    inputValidationMiddleware,
    postInputValidator
} from "../../middlewares/input-validation-middleware";
import {body} from "express-validator";
import {getBlogsControllerByID} from "./getBlogsControllerByID";


export const blogsRouter = Router();

// blogsRouter.get('/:id',
//     inputValidationMiddleware,
//     ...postInputValidator,
//
//     getBlogsController);

blogsRouter.get('/', getBlogsController);
 blogsRouter.get('/:id', getBlogsControllerByID);
// blogsRouter.post('/', postBlogsController);
// blogsRouter.put('/:id', putBlogsController);
 blogsRouter.delete('/:id', authMiddleware, deleteBlogsController);
