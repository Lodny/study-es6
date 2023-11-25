import {testRun, repeatCallFnWithCountEveryMillisUntilSeconds} from "../common.js";


const debounce = (fn, t) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(_ => fn(...args), t);
    }
}

let run = testRun;
run = debounce(run, 500);
// repeatCallFnWithCountEveryMillisUntilSeconds(run, 100, 3);
repeatCallFnWithCountEveryMillisUntilSeconds(run, 600, 2);

