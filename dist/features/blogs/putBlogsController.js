"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBlogsController = void 0;
const blogsRepository_1 = require("./blogsRepository");
const putBlogsController = (req, res) => {
    const foundBlog = blogsRepository_1.blogsRepository.findBlog(req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    blogsRepository_1.blogsRepository.updateBlog(foundBlog, req.body);
    res
        .status(204)
        .send(foundBlog);
};
exports.putBlogsController = putBlogsController;
