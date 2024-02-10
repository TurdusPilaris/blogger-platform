"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllController = void 0;
const testingRepository_1 = require("./testingRepository");
const deleteAllController = (req, res) => {
    testingRepository_1.testingRepository.deleteAll();
    res.sendStatus(204);
};
exports.deleteAllController = deleteAllController;
