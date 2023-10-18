const isEmpty = function(obj) {
    if (Array.isArray(obj))
        return obj.length === 0;

    return Object.keys(obj)?.length === 0;
};

console.log(isEmpty([]));
console.log(isEmpty([1]));
console.log(isEmpty({}));
console.log(isEmpty({name: 'juice'}));
