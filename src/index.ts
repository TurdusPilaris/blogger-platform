import {app} from "./main/app";
import {SETTING} from "./main/setting"
import {addRoutes} from "./main/routes";

addRoutes(app);

app.listen(SETTING.PORT, () => {
    console.log(`Example app listening on port ${SETTING.PORT}`)
})