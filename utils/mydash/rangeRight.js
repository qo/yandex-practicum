function baseRange(start, end, step) {

    const length = Math.abs(end - start);

    if (step === 0) {
        const result = [];
        for (let i = 0; i < length; i++) result.push(end);
        return result;
    }

    const result = [];
    // Iterate while the amount of iterations is exceeded or the end is reached
    for (let current = start, iterations = 0; current != end && iterations < length; current += step, iterations++) {
        result.push(current);
    }
    return result;
}

function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

function range(start, end, step, isRight) {

    // If zero arguments are passed
    if (start === undefined) return [];

    // If one argument is passed
    if (end === undefined) {
        const step = (start < 0) ? -1 : 1;
        return isRight ?
            baseRange(start - step, 0 - step, -step) :
            baseRange(0, start, step);
    }

    // If two arguments are passed
    else if (step === undefined)
        return isRight ?
            baseRange(end - 1, start - 1, -1) :
            baseRange(start, end, 1);

    // If three arguments are passed
    else
        return isRight ?
            baseRange(end - step, start - step, -step) :
            baseRange(start, end, step);

}

/*
    rangeRight(4); // => [3, 2, 1, 0]
    rangeRight(-4); // => [-3, -2, -1, 0]
    rangeRight(1, 5); // => [4, 3, 2, 1]
    rangeRight(0, 20, 5); // => [15, 10, 5, 0]
    rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
    rangeRight(1, 4, 0); // => [1, 1, 1]
    rangeRight(0); // => []
*/
console.log(rangeRight(4));
console.log(rangeRight(-4));
console.log(rangeRight(1, 5));
console.log(rangeRight(0, 20, 5));
console.log(rangeRight(0, -4, -1));
console.log(rangeRight(1, 4, 0));
console.log(rangeRight(0));