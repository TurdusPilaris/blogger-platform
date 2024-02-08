import {Router} from "express";
import {getPostsController} from "./getPostsController";
import {deletePostsController} from "./deletePostsController";
import {authMiddleware} from "../../middlewares/input-validation-middleware";
import {getPostsControllerByID} from "./getPostsControllerByID";

export const postsRouter = Router();

postsRouter.get('/', getPostsController);
postsRouter.get('/:id', getPostsControllerByID);
// postsRouter.post('/', postPostsController);
// postsRouter.put('/:id', putPostsController);
postsRouter.delete('/:id', authMiddleware, deletePostsController);
