"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsController = void 0;
const blogsRepository_1 = require("./blogsRepository");
const getBlogsController = (req, res) => {
    res
        .status(200)
        .send(blogsRepository_1.blogsRepository.getAllBlogs());
};
exports.getBlogsController = getBlogsController;
