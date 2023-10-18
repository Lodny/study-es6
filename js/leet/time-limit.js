import {ll} from './common.js'

var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
            try {
                const result = await fn(...args);
                ll('result:', result);
                resolve(result);
            } catch (error) {
                ll('reject:', error);
                reject(error);
            }
        });
    }
};

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 3000));
    ll('fn end...')
    return n * n;
}
const inputs = [5]
const t = 500;

(async () => {
    const limited = timeLimit(fn, t)
    const start = performance.now()
    let result;
    try {
        const res = await limited(...inputs)
        ll('resolve...');
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        ll('catch...');
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    ll(result) // Output
})();

ll('end...');
