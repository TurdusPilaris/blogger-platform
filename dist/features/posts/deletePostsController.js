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
exports.deletePostsController = void 0;
const postMongoRepository_1 = require("./postMongoRepository");
const mongodb_1 = require("mongodb");
const deletePostsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield postMongoRepository_1.postsMongoRepository.deletePost(new mongodb_1.ObjectId(req.params.id));
    const foundedPost = yield postMongoRepository_1.postsMongoRepository.find(new mongodb_1.ObjectId(req.params.id));
    if (foundedPost) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204);
    return;
});
exports.deletePostsController = deletePostsController;
