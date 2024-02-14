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
exports.blogsRepository = void 0;
const app_1 = require("../../main/app");
exports.blogsRepository = {
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // { input
            //     "title": "string",
            //     "shortDescription": "string",
            //     "content": "string",
            //     "blogId": "string"
            // }
            const newBlog = {
                id: (Date.now() + Math.random()).toString(),
                name: input.name,
                description: input.description,
                websiteUrl: input.websiteUrl,
            };
            app_1.db.blogs.push(newBlog);
            return newBlog;
        });
    },
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundBlog = app_1.db.blogs.find(b => b.id === id);
            return foundBlog;
        });
    },
    getAllBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return app_1.db.blogs;
        });
    },
    deleteBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < app_1.db.blogs.length; i++) {
                if (app_1.db.blogs[i].id === id) {
                    app_1.db.blogs.splice(i, 1);
                    return id;
                }
            }
            return undefined;
        });
    },
    findBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundBlog = app_1.db.blogs.find(a => a.id === id);
            return foundBlog;
        });
    },
    updateBlog(blog, input) {
        return __awaiter(this, void 0, void 0, function* () {
            blog.name = input.name;
            blog.description = input.description;
            blog.websiteUrl = input.websiteUrl;
        });
    }
};
