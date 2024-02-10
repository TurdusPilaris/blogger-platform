"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.db = (0, db_1.createDB)();
const jsonBodyMiddleware = express_1.default.json();
exports.app.use(jsonBodyMiddleware);
(0, routes_1.addRoutes)(exports.app);
