export default {
    sleep: (time) => new Promise(resolve => setTimeout(resolve, time)),

    getStringHashCode: (obj) => {
        if (typeof obj !== "string") {
            obj = JSON.stringify(obj);
        }

        let hash = 0;
        let char;

        for (let i = 0; i < obj.length; i++) {
            char = obj.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }

        return hash.toString();
    }
};

export class Locker {
    constructor() {
        this.mutex = Promise.resolve();
    }

    lock() {
        let begin = unlock => { };

        this.mutex = this.mutex.then(() => {
            return new Promise(begin);
        });

        return new Promise(res => {
            begin = res;
        });
    }

    async executeLocked(fn) {
        const unlock = await this.lock();
        try {
            return await Promise.resolve(fn());
        } finally {
            unlock();
        }
    }
}

export class KeyLocker {
    constructor() {
        this.lockers = {};
    }

    async executeLocked(key, fn) {
        console.log(this.lockers && this.lockers[key]);

        if (!this.lockers[key]) {
            this.lockers[key] = new Locker();
        }

        const result = await this.lockers[key].executeLocked(fn);
        return result;
    }
}

export const DefaultKeyLocker = new KeyLocker();
