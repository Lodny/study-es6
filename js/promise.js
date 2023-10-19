async function func1() {
    console.log('func1 start...')
    const ret = await new Promise(res => setTimeout(() => res(1), 3000));
    console.log('func1 end...')
    return ret;
}

async function func2() {
    console.log('func2 start...')
    const ret = await new Promise(res => setTimeout(() => res(2), 2000));
    console.log('func2 end...')
    return ret;
}

async function func3() {
    console.log('func3 start...')
    const ret = await new Promise(res => setTimeout(() => res(3), 1000));
    console.log('func3 end...')
    return ret;
}

const start = performance.now();
console.log('start...');

(async () => {
    console.log('in main...');
    const ret = await func1();
    const ret2 = await func2();
    console.log('end main...', ret, ret2, performance.now() - start);
})();

console.log('continue...');

(async () => {
    console.log('in sub...');
    const ret3 = await func3();
    console.log(ret3);
    console.log('end sub...', ret3, performance.now() - start);
})();

console.log('end..................................................', performance.now() - start);
