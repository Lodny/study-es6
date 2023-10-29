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

let run = v => console.log(`running...${v}`);
run = throttle(run, 1000);

const asyncFn = _ => {
    const endTime = Date.now() + 5000; // 현재 시간으로부터 10초 뒤의 시간을 계산

    (async _ => {
        for (let i = 0; i < 1000; i++) {
            const currentTime = Date.now();
            if (currentTime > endTime) break;

            await new Promise(resolve => setTimeout(_ => resolve(), 100));
            run(i + '-----' + new Date().toISOString()); // 현재 시각을 전달하여 함수 호출
            console.log(i);
        }
    })();
}

function callFunctionFor10Seconds(fn) {
    const endTime = Date.now() + 5000; // 현재 시간으로부터 10초 뒤의 시간을 계산
    let cnt = 0;

    function callFunction() {
        const currentTime = Date.now();
        fn(++cnt + '-----' + new Date().toISOString()); // 현재 시각을 전달하여 함수 호출
        console.log(cnt);

        if (currentTime < endTime) {
            setTimeout(callFunction, 100); // 100ms 후에 다시 호출
        }
    }

    callFunction(); // 함수 호출 시작
}

// run 함수를 10초 동안 100ms 간격으로 호출
// callFunctionFor10Seconds(run);
asyncFn();

