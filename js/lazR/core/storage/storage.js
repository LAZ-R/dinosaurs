import { DEFAULT_SETTINGS } from "../../../../app-default-settings.js";
import { APP_SHORT_NAME } from "../../../data/app.data.js";

const STORAGE = localStorage;
const storageName = `${APP_SHORT_NAME}009`

if (STORAGE.getItem(`${storageName}FirstTime`) === null) {
    STORAGE.setItem(`${storageName}FirstTime`, '0');
    let userTMP = {
        isDev: false,
        settings: DEFAULT_SETTINGS
    };
    STORAGE.setItem(`${storageName}User`, JSON.stringify(userTMP));
}
/* ------------------------------------------------------------------------- */
export const getUser = () => {
    return JSON.parse(STORAGE.getItem(`${storageName}User`));
}
export const setUser = (user) => {
    STORAGE.setItem(`${storageName}User`, JSON.stringify(user));
}
export const isUserDev = () => {
    const user = getUser();
    return user.isDev;
}
/* ------------------------------------------------------------------------- */
export const getUserSetting = (id) => {
    let settingToReturn = '';
    const user = getUser();
    const settings = user.settings;
    settings.forEach(settingsGroups => {
        settingsGroups.settings.forEach(setting => {
            if (setting.id == id) {
                settingToReturn = setting;
            }
        });
    });
    return settingToReturn;
}