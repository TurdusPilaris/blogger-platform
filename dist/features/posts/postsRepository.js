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
exports.postsRepository = void 0;
const app_1 = require("../../main/app");
const blogsRepository_1 = require("../blogs/blogsRepository");
exports.postsRepository = {
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundedBlog = yield blogsRepository_1.blogsRepository.findBlog(input.blogId);
            const newPost = {
                id: (Date.now() + Math.random()).toString(),
                title: input.title,
                shortDescription: input.shortDescription,
                content: input.content,
                blogId: input.blogId,
                blogName: yield (foundedBlog === null || foundedBlog === void 0 ? void 0 : foundedBlog.name),
            };
            app_1.db.posts.push(newPost);
            return newPost;
        });
    },
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundPost = app_1.db.posts.find(p => p.id === id);
            return foundPost;
        });
    },
    findForOutput(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundPost = yield app_1.db.posts.find(p => p.id === id);
            if (!foundPost) {
                return undefined;
            }
            return this.mapToOutput(foundPost);
        });
    },
    mapToOutput(post) {
        return {
            id: post.id,
            title: post.title
        };
    },
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return app_1.db.posts;
        });
    },
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < app_1.db.posts.length; i++) {
                if (app_1.db.posts[i].id === id) {
                    app_1.db.posts.splice(i, 1);
                    return id;
                }
            }
            return Promise;
        });
    },
    findPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundPost = yield app_1.db.posts.find(a => a.id === id);
            return foundPost;
        });
    },
    updatePost(post, input) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let foundedBlog = yield blogsRepository_1.blogsRepository.findBlog(post.blogId);
            post.title = input.title;
            post.shortDescription = input.shortDescription;
            post.content = input.content;
            post.blogId = (_a = input.blogId) !== null && _a !== void 0 ? _a : post.blogId;
            post.blogName = foundedBlog === null || foundedBlog === void 0 ? void 0 : foundedBlog.name;
        });
    }
};
