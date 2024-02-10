"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRepository = void 0;
const app_1 = require("../../main/app");
exports.testingRepository = {
    deleteAll() {
        app_1.db.posts.splice(0, app_1.db.posts.length);
        app_1.db.blogs.splice(0, app_1.db.blogs.length);
    }
};
