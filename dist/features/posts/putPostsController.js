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
exports.putPostsController = void 0;
const mongodb_1 = require("mongodb");
const postMongoRepository_1 = require("./postMongoRepository");
const putPostsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const foundPost = await postsRepository.findPost(req.params.id);
    // if(!foundPost) {
    //     res.sendStatus(404);
    //     return;
    // }
    yield postMongoRepository_1.postsMongoRepository.updatePost(new mongodb_1.ObjectId(req.params.id), req.body);
    const foundPost = yield postMongoRepository_1.postsMongoRepository.find(new mongodb_1.ObjectId(req.params.id));
    res
        .status(204)
        .send(foundPost);
});
exports.putPostsController = putPostsController;
