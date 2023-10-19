const throttle = (fn, delay) => {
    let wait = false;
    let savedArgs = undefined;

    const timeoutFunc = _ => {
        if (savedArgs === undefined) {
            wait = false;
        } else {
            fn(...savedArgs);
            savedArgs = undefined;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        if (wait) {
            savedArgs = args;
            return;
        }

        fn(...args);
        wait = true;

        setTimeout(timeoutFunc, delay);
    }
}

const run = v => console.log(`running...${v}`);
const throttledRun = throttle(run, 1000);

(async _ => {
    for (let i = 0; i < 30; i++) {
        await new Promise(resolve => setTimeout(_ => resolve(), 100));
        // run(i);
        throttledRun(i);
    }
})();



