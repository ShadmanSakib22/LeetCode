/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let numberArr = [];

    for (let i = 0; i < arr.length; i++){
        numberArr[i] = fn(arr[i], i)
    }

    return numberArr;
};