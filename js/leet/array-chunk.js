import {ll} from './common.js'

const chunk = (arr, size) => {
    // return arr.reduce((newArr, curr, idx) => {
    //     const currChunk = newArr[Math.floor(idx / size)];
    //     if (currChunk)
    //         currChunk.push(curr);
    //     else
    //         newArr.push([curr]);
    //
    //     return newArr;
    // }, []);

    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }

    return chunkedArray;
}

ll(chunk([1, 2, 3, 4, 5, 6, 7], 1));
ll(chunk([1, 2, 3, 4, 5, 6, 7], 2));
ll(chunk([1, 2, 3, 4, 5, 6, 7], 3));
ll(chunk([1, 2, 3, 4, 5, 6, 7], 4));
