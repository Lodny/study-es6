const throttle = (fn, t) => {
    let timerId = 0;

    return (...args) => {
        if (timerId)
            return;

        fn(...args);
        timerId = setTimeout(_ => timerId = 0, t);
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



