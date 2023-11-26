export let testRun = v => console.log('::run():', v)

export const repeatCallFnWithCountEveryMillisUntilSeconds = (fn, millis, seconds) => {
    const endMillis = Date.now() + seconds * 1000;

    let count = 0;
    let timer;
    const intervalFn = () => {
        if (Date.now() > endMillis) {
            clearInterval(timer);
            return;
        }

        fn(++count);
    }
    intervalFn();
    timer = setInterval(() => intervalFn(), millis);
}
