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
exports.postBlogsController = void 0;
const blogsMongoRepository_1 = require("./blogsMongoRepository");
const postBlogsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const newBlog = await blogsRepository.create(req.body);
    //
    // res
    //     .status(201)
    //     .json(newBlog);
    const insertedInfo = yield blogsMongoRepository_1.blogsMongoRepository.create(req.body);
    if (insertedInfo) {
        const newBlog = yield blogsMongoRepository_1.blogsMongoRepository.findForOutput(insertedInfo.insertedId);
        res
            .status(201)
            .send(newBlog);
    }
});
exports.postBlogsController = postBlogsController;
