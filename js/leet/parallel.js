const start = performance.now();

const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const resultList = new Array(functions.length);
        let completedCount = 0;

        functions.forEach((func, idx) => func()
            .then(result => {
                resultList[idx] = result;
                if (++completedCount === functions.length)
                    resolve(resultList);
            })
            .catch(error => {
                reject(error);
            }));
    })
};


const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(1), 5000)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    // () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]);
promise
    .then(ret => console.log('resolve:', ret, performance.now() - start))
    .catch(err => console.log('reject:', err, performance.now() - start))
