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
exports.postForPostsController = void 0;
// import {postsRepository} from "./postsRepository";
const postMongoRepository_1 = require("./postMongoRepository");
const postForPostsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const newPost = await postsRepository.create(req.body);
    //
    // res
    //     .status(201)
    //      .send(newPost);
    const insertedInfo = yield postMongoRepository_1.postsMongoRepository.create(req.body);
    if (insertedInfo) {
        const newPost = yield postMongoRepository_1.postsMongoRepository.findForOutput(insertedInfo.insertedId);
        res
            .status(201)
            .send(newPost);
    }
});
exports.postForPostsController = postForPostsController;
