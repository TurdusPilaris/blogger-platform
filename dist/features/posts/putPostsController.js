"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPostsController = void 0;
const postsRepository_1 = require("./postsRepository");
const putPostsController = (req, res) => {
    // const newPost = postsRepository.create(req.body);
    //
    // res
    //     .status(201)
    //      .send(newPost);
    const foundPost = postsRepository_1.postsRepository.findPost(req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }
    postsRepository_1.postsRepository.updatePost(foundPost, req.body);
    res
        .status(204)
        .send(foundPost);
};
exports.putPostsController = putPostsController;
