"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsControllerByID = void 0;
const postsRepository_1 = require("./postsRepository");
const getPostsControllerByID = (req, res) => {
    const foundPost = postsRepository_1.postsRepository.findPost(req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
    }
    res
        .status(200)
        .send(foundPost);
};
exports.getPostsControllerByID = getPostsControllerByID;
