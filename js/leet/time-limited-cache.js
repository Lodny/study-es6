class TimeLimitedCache {
    constructor() {
        this.map = new Map();
    }

    set(key, value, duration) {
        let ret = false;
        if (this.map.has(key)) {
            clearTimeout(this.map.get(key).timerId);
            ret = true;
        }

        const timerId = setTimeout(() => this.map.delete(key), duration);
        this.map.set(key, {value, timerId});

        return ret;
    }

    get(key) {
        if (! this.map.has(key))
            return -1;

        return this.map.get(key).value;
    }

    count() {
        return this.map.size;
    }
}


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
