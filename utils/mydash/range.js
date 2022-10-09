function baseRange(start, end, step) {
    const result = [];
    const length = Math.abs(end - start);
    // Iterate while the amount of iterations is exceeded or the end is reached
    for (let current = start, iterations = 0; current != end && iterations < length; current += step, iterations++) {
        result.push(current);
    }
    return result;
}

function range(start, end, step) {

    // If zero arguments are passed
    if (start === undefined) return [];

    // If one argument is passed
    else if (end === undefined) {
        const step = (start < 0) ? -1 : 1;
        return baseRange(0, start, step);
    }

    // If two arguments are passed
    else if (step === undefined) return baseRange(start, end, 1);

    // If three arguments are passed
    else return baseRange(start, end, step);

}

/*
	* range(4); // => [0, 1, 2, 3]
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/
console.log(range(4));
console.log(range(-4));
console.log(range(1, 5));
console.log(range(0, 20, 5));
console.log(range(0, -4, -1));
console.log(range(1, 4, 0));
console.log(range(0));