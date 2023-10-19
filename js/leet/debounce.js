const debounce = (fn, t) => {
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(_ => fn(...args), t);
    }
};

const run = v => console.log(`running...${v}`);
const debouncedRun = debounce(run, 1000);

(async _ => {
    for (let i = 0; i < 30; i++) {
        await new Promise(resolve => setTimeout(_ => resolve(), 100));
        // run(i);
        debouncedRun(i);
    }
})();

