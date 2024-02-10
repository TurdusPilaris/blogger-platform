"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.postInputValidatorPost = exports.titleValidation = exports.customBlogIdMiddleware = exports.postInputValidatorBlog = exports.postInputValidator = exports.inputValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
const postsRepository_1 = require("../features/posts/postsRepository");
const blogsRepository_1 = require("../features/blogs/blogsRepository");
const inputValidationMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errorsMessages: errors.array().map((e) => { return { field: e.path, message: e.msg }; }) });
        return;
    }
    else {
        next();
    }
};
exports.inputValidationMiddleware = inputValidationMiddleware;
exports.postInputValidator = [
    (0, express_validator_1.body)('title').trim().isString(),
    (0, express_validator_1.body)('content').trim().isLength({ min: 0, max: 1000 }),
    (0, express_validator_1.body)('blogId').custom((blogId) => __awaiter(void 0, void 0, void 0, function* () {
        yield postsRepository_1.postsRepository.find(blogId);
    })),
];
exports.postInputValidatorBlog = [
    (0, express_validator_1.body)('name').trim().isLength({ min: 3, max: 15 }).withMessage('Name should be from 3 to 15'),
    (0, express_validator_1.body)('description').trim().isLength({ min: 1, max: 500 }).withMessage('Name should be from 1 to 500'),
    (0, express_validator_1.body)('websiteUrl').isURL().withMessage('Is not URL'),
];
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
exports.customBlogIdMiddleware = (0, express_validator_1.body)('blogId').custom((value) => __awaiter(void 0, void 0, void 0, function* () {
    const foundBlog = yield blogsRepository_1.blogsRepository.find(value);
    if (!foundBlog) {
        throw new Error('Blog not found');
    }
}));
exports.titleValidation = (0, express_validator_1.body)('title').trim().isLength({ min: 3, max: 30 }).withMessage('Field should be from 3 to 30');
exports.postInputValidatorPost = [
    (0, express_validator_1.body)('title').trim().isLength({ min: 3, max: 30 }).withMessage('Field should be from 3 to 30'),
    // titleValidation,
    (0, express_validator_1.body)('shortDescription').trim().isLength({ min: 1, max: 100 }).withMessage('Field should be from 1 to 100'),
    (0, express_validator_1.body)('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Field should be from 1 to 1000'),
    (0, express_validator_1.body)('blogId').custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        if (value) {
            const foundBlog = yield blogsRepository_1.blogsRepository.find(value);
            if (!foundBlog) {
                throw new Error('Blog not found');
            }
        }
    }))
    // customBlogIdMiddleware
];
const ADMIN_AUTH_BASE64 = 'Basic YWRtaW46cXdlcnR5';
const authMiddleware = (req, res, next) => {
    if (!req.headers['authorization']) {
        res.sendStatus(401);
    }
    else {
        const auth = req.headers['authorization'];
        if (auth !== ADMIN_AUTH_BASE64) {
            res.sendStatus(401);
        }
        next();
    }
};
exports.authMiddleware = authMiddleware;
