"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./main/app");
const setting_1 = require("./main/setting");
const routes_1 = require("./main/routes");
(0, routes_1.addRoutes)(app_1.app);
app_1.app.listen(setting_1.SETTING.PORT, () => {
    console.log(`Example app listening on port ${setting_1.SETTING.PORT}`);
});
