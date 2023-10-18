import {ll} from './common.js'

var isEmpty = function(obj) {
    if (Array.isArray(obj))
        return obj.length === 0;

    return Object.keys(obj)?.length === 0;
};

ll(isEmpty([]));
ll(isEmpty([1]));
ll(isEmpty({}));
ll(isEmpty({name: 'juice'}));
