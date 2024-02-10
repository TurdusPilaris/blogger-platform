"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostsController = void 0;
const postsRepository_1 = require("./postsRepository");
const deletePostsController = (req, res) => {
    if (!postsRepository_1.postsRepository.deletePost(req.params.id)) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;
};
exports.deletePostsController = deletePostsController;
