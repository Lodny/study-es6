const debounce = function(fn, t) {
    let timerId = -1;

    return function(...args) {
        if (timerId >= 0) {
            clearTimeout(timerId);
            timerId = -1;
        }

        timerId = setTimeout(() => {
            fn(...args);
        }, t)
    }
};


const log = debounce(console.log, 100);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms
