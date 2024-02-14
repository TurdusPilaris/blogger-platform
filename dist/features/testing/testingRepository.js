"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRepository = void 0;
const mongo_db_1 = require("../../db/mongo-db");
exports.testingRepository = {
    // deleteAll() {
    //    db.posts.splice(0, db.posts.length);
    //    db.blogs.splice(0, db.blogs.length);
    // }
    deleteAll: function () {
        mongo_db_1.postCollection.drop();
        mongo_db_1.blogCollection.drop();
    }
};
