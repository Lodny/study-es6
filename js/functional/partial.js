const _curry = fn => (...args) => args.length === 2 ?
    fn(args[0], args[1]) : b => fn(args[0], b);

const _curryR = fn => (...args) => args.length === 2 ?
    fn(args[0], args[1]) : b => fn(b, args[0]);

const slice = Array.prototype.slice;
const _rest = (list, n) => slice.call(list, n || 1);
let _get = (obj, key) => (obj === null || obj === undefined) ? undefined : obj[key];
_get = _curryR(_get);
const _length = _get('length');

const _is_object = obj => typeof obj === 'object' && !!obj;
const _keys = obj => _is_object(obj) ? Object.keys(obj) : [];

const _each = (list, iter) => {
    const keys = _keys(list)
    for (let i = 0; i < keys.length; i++)
        iter(list[keys[i]]);
    return list;
}

let _map = (list, mapper) => {
    const new_list = [];
    _each(list, val => new_list.push(mapper(val)));

    return new_list;
}
_map = _curryR(_map);

const _identity = val => val;
const _values = _map(_identity);
const _plunk = (list, key) => _map(list, _get(key))

let _filter = (list, predicate) => {
    const new_list = [];
    _each(list, val => predicate(val) && new_list.push(val))
    return new_list;
}
_filter = _curryR(_filter);
const _negate = func => val => !func(val);
// const _reject = (list, predicate) => _filter(list, val => !predicate(val));
const _reject = (list, predicate) => _filter(list, _negate(predicate));
const _compact = _filter(_identity);

const _reduce = (list, fn, memo) => {
    if (!memo) {
        memo = list[0];
        list = _rest(list);
    }
    _each(list, val => memo = fn(memo, val))
    return memo;
}

const _pipe = (...fns) => arg => _reduce(fns, (arg, fn) => fn(arg), arg);
const _go = (...args) => _pipe(..._rest(args))(args[0])


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
const users = [
    { id: 10, name: 'ID', age: 36 },
    { id: 20, name: 'BJ', age: 32 },
    { id: 30, name: 'JM', age: 32 },
    { id: 40, name: 'PJ', age: 27 },
    { id: 50, name: 'HA', age: 25 },
    { id: 60, name: 'JE', age: 26 },
    { id: 70, name: 'JI', age: 31 },
    { id: 80, name: 'MP', age: 23 },
    { id: 90, name: 'FP', age: 13 },
];


console.log(_compact([1, 0, null, undefined, 100, {}, []]));





