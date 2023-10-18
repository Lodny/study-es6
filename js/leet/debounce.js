const debounce = function(fn, t) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(_ => fn(...args), t);
    }
};


const log = debounce(console.log, 100);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms
