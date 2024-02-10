"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogsController = void 0;
const blogsRepository_1 = require("./blogsRepository");
const deleteBlogsController = (req, res) => {
    if (!blogsRepository_1.blogsRepository.deleteBlog(req.params.id)) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
    return;
};
exports.deleteBlogsController = deleteBlogsController;
