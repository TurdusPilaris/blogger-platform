"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const deleteAllController_1 = require("./deleteAllController");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete('/all-data', deleteAllController_1.deleteAllController);
