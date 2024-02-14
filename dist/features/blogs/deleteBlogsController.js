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
exports.deleteBlogsController = void 0;
const mongodb_1 = require("mongodb");
const blogsMongoRepository_1 = require("./blogsMongoRepository");
const deleteBlogsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const resultDelete = await blogsRepository.deleteBlog(req.params.id);
    // if (!resultDelete) {
    //     res.sendStatus(404);
    // }
    // res.sendStatus(204);
    // return;
    yield blogsMongoRepository_1.blogsMongoRepository.deleteBlog(new mongodb_1.ObjectId(req.params.id));
    const foundedBlog = yield blogsMongoRepository_1.blogsMongoRepository.find(new mongodb_1.ObjectId(req.params.id));
    if (foundedBlog) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204);
    return;
});
exports.deleteBlogsController = deleteBlogsController;
