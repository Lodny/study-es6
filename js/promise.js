import {ll} from './common.js'

async function func1() {
    ll('func1 start...')
    const ret = await new Promise(res => {
        setTimeout(() => res(1), 3000);
    });
    ll('func1 end...')

    return ret;
}

async function func2() {
    ll('func2 start...')
    const ret = await new Promise(res => {
        setTimeout(() => res(2), 2000);
    });
    ll('func2 end...')

    return ret;
}

async function func3() {
    ll('func3 start...')
    const ret = await new Promise(res => {
        setTimeout(() => res(3), 1000);
    });
    ll('func3 end...')

    return ret;
}

const start = performance.now();
ll('start...');

(async () => {
    ll('in main...');
    const ret = await func1();
    const ret2 = await func2();
    ll('end main...', ret, ret2, performance.now() - start);
})();

ll('continue...');

(async () => {
    ll('in sub...');
    const ret3 = await func3();
    ll(ret3);
    ll('end sub...', ret3, performance.now() - start);
})();

ll('end..................................................', performance.now() - start);
