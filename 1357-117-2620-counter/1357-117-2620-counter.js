/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function(n) {
    return (...args) => n++
};

