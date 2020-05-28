import { Config } from "../../app.config";
import axios from "axios";
import Utils, { DefaultKeyLocker } from "../utils/jsutils";
import AsyncStorage from "@react-native-community/async-storage";
import { Buffer } from "buffer";

class MediaStorage {
    constructor(basePath) {
        this.basePath = basePath;
        this.locked = {};
    }

    async getFile(url) {
        const key = Utils.getStringHashCode(url);

        return await DefaultKeyLocker.executeLocked(key, async () => {
            try {
                let b64File = await AsyncStorage.getItem(key);

                if (!b64File) {
                    const { data, headers } = await axios.get(url, {
                        responseType: "arraybuffer",
                        timeout: 30000
                    });

                    b64File = `data:${headers["content-type"]};base64,${new Buffer(data, "binary").toString("base64")}`;

                    await this.saveFile(key, b64File);
                }

                return b64File;
            } catch (error) {
                console.error(error);
                return null;
            }
        });
    }

    async saveFile(key, data) {
        try {
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            console.log(error);
        }
    }

    removeFile(name) {

    }

    clear() {

    }
}

export default new MediaStorage(Config.mediaPath);
