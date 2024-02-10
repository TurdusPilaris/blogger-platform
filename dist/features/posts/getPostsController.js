"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsController = void 0;
const postsRepository_1 = require("./postsRepository");
const getPostsController = (req, res) => {
    res
        .status(200)
        .send(postsRepository_1.postsRepository.getAllPosts());
};
exports.getPostsController = getPostsController;
