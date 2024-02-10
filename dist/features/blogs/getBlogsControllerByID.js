"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsControllerByID = void 0;
const blogsRepository_1 = require("./blogsRepository");
const getBlogsControllerByID = (req, res) => {
    const foundBlog = blogsRepository_1.blogsRepository.findBlog(req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
    }
    res
        .status(200)
        .send(foundBlog);
};
exports.getBlogsControllerByID = getBlogsControllerByID;
