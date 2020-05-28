import AsyncStorage from "@react-native-community/async-storage";
import { Defaults } from "../../app.config";

const LANG_KEY = "LANG";

class ObjectDataStorage {

    constructor(useLanguage) {
        this.useLanguage = useLanguage || false;
    }

    async _getKey(key) {
        if (this.useLanguage) {
            const lang = await getCurrentLanguage();
            key = `${key}_${lang}`;
        }

        return key;
    }

    async get(key) {
        if (typeof key !== "string") throw "Invalid key type.";

        key = await this._getKey(key);

        try {
            const data = await AsyncStorage.getItem(key);
            const jsonData = JSON.parse(data);
            return jsonData;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    async set(key, values) {
        if (typeof key !== "string") throw "Invalid key type.";

        key = await this._getKey(key);

        try {
            const stringValue = typeof values === "object" ? JSON.stringify(values) : values;
            await AsyncStorage.setItem(key, stringValue);
        } catch (err) {
            console.error(`Failed to save data into AsyncStorage. Key: '${key}'.`, err);
        }
    }

    async remove(key) {
        if (typeof key !== "string") throw "Invalid key type.";

        key = await this._getKey(key);

        try {
            await AsyncStorage.removeItem(key);
        } catch (err) {
            console.error(`Failed to remove data from AsyncStorage. Key: '${key}'.`, err);
        }
    }
}

export async function getCurrentLanguage() {
    return (await AsyncStorage.getItem(LANG_KEY) || Defaults.lang);
};

export const AppLanguageStorage = new ObjectDataStorage(true);
export const AppStorage = new ObjectDataStorage(false);
