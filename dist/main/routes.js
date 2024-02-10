"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = exports.PATH = void 0;
const testing_1 = require("../features/testing");
const posts_1 = require("../features/posts");
const blogs_1 = require("../features/blogs");
exports.PATH = {
    BLOGS: '/blogs',
    POSTS: '/posts',
    TESTING: '/testing'
};
const addRoutes = (app) => {
    app.use(exports.PATH.TESTING, testing_1.testingRouter);
    app.use(exports.PATH.POSTS, posts_1.postsRouter);
    app.use(exports.PATH.BLOGS, blogs_1.blogsRouter);
    app.get('/', (req, res) => {
        res.send('Hello Samurai');
    });
};
exports.addRoutes = addRoutes;
