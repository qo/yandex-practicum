function isEmpty(value) {

    const type = typeof value;

    // Catch false and primitive values early
    if (!value) return true;
    if (type === 'number' || type === 'boolean')
        return true;

    // Objects and arrays
    if (type === 'object') {
        // Array
        if (value instanceof Array && value.length) return false;
        // Map
        else if (value instanceof Map && value.size) return false;
        // Set
        else if (value instanceof Set && value.size) return false;
        // Object
        else if (Object.keys(value).length) return false;
    }

    // Strings
    else if (type === 'string' && value.length) return false;

    return true;

}

/*
    isEmpty(null); // true
    isEmpty(true); // true
    isEmpty(1); // true
    isEmpty([1,2,3]); // false
    isEmpty({'a':1}); // false
    isEmpty('123'); // false
    isEmpty(123); // true
    isEmpty(''); // true
    isEmpty(0); // true
*/
console.log(isEmpty(null));
console.log(isEmpty(true));
console.log(isEmpty(1));
console.log(isEmpty([1,2,3]));
console.log(isEmpty({'a': 1}));
console.log(isEmpty('123'));
console.log(isEmpty(123));
console.log(isEmpty(''));
console.log(isEmpty(0));
console.log(isEmpty(new Map().set('a', 1)));
console.log(isEmpty(new Map()));
console.log(isEmpty(new Set().add(1)));
console.log(isEmpty(new Set()));