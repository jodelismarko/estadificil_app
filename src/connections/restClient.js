import axios from "axios";
import Utils from "../utils/jsutils";
import { ServiceEndpoints } from "../../app.config";
import { AppLanguageStorage } from "../storage/objectDataStorage";

class RestClient {
    constructor({ url, user, pwd, cacheStorage }) {
        this.credentials = user && pwd ? { user, pwd } : null;
        this.cacheStorage = cacheStorage || false;

        this.client = axios.create({
            baseURL: url,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            withCredentials: user && pwd ? true : false
        });
    }

    isUnauthorized = (status) => status === 401 || status === 403;

    async get(url) {
        let data = null;
        let cacheKey;

        if (this.cacheStorage) {
            cacheKey = Utils.getStringHashCode(`${this.client.defaults.baseURL}${url}`);
            data = await this.cacheStorage.get(cacheKey);
        }

        if (!data) {
            data = await this.request({ method: "GET", url });

            if (this.cacheStorage) {
                this.cacheStorage.set(cacheKey, data);
            }
        }

        return data;
    }

    post = (url, data) => this.request({ method: "POST", url, data });

    //TODO: JL
    async login() {
        // this.client.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        return false;
    }

    async request(config) {
        try {
            let response = await this.client.request({
                ...config,
                validateStatus: status => status >= 200 && status < 300 && this.isUnauthorized(status)
            });

            if (this.isUnauthorized(response.status) && this.login()) {
                response = await this.client.request(config);
            }

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export const SitecoreApiClient = new RestClient({ ...ServiceEndpoints.sitecoreApi, AppLanguageStorage });
export const SelfCareApiClient = new RestClient(ServiceEndpoints.selfCareApi);