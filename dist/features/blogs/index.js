"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const getBlogsController_1 = require("./getBlogsController");
const deleteBlogsController_1 = require("./deleteBlogsController");
const input_validation_middleware_1 = require("../../middlewares/input-validation-middleware");
const getBlogsControllerByID_1 = require("./getBlogsControllerByID");
const postBlogsController_1 = require("./postBlogsController");
const putBlogsController_1 = require("./putBlogsController");
exports.blogsRouter = (0, express_1.Router)();
// blogsRouter.get('/:id',
//     inputValidationMiddleware,
//     ...postInputValidator,
//
//     getBlogsController);
exports.blogsRouter.get('/', getBlogsController_1.getBlogsController);
exports.blogsRouter.get('/:id', getBlogsControllerByID_1.getBlogsControllerByID);
exports.blogsRouter.post('/', input_validation_middleware_1.authMiddleware, input_validation_middleware_1.postInputValidatorBlog, input_validation_middleware_1.inputValidationMiddleware, postBlogsController_1.postBlogsController);
exports.blogsRouter.put('/:id', input_validation_middleware_1.authMiddleware, input_validation_middleware_1.postInputValidatorBlog, input_validation_middleware_1.inputValidationMiddleware, putBlogsController_1.putBlogsController);
exports.blogsRouter.delete('/:id', input_validation_middleware_1.authMiddleware, deleteBlogsController_1.deleteBlogsController);
