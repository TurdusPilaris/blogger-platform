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
const app_1 = require("./main/app");
const setting_1 = require("./main/setting");
const routes_1 = require("./main/routes");
const mongo_db_1 = require("./db/mongo-db");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, routes_1.addRoutes)(app_1.app);
    if (!(0, mongo_db_1.connectionToDB)()) {
        process.exit(1);
    }
    app_1.app.listen(setting_1.SETTING.PORT, () => {
        console.log(`Example app listening on port ${setting_1.SETTING.PORT}`);
    });
});
start();
