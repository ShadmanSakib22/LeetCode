/**
 * @param {string} val
 * @return {Object}
 */
let expect = function(val) {
    let testObj = {
        toBe: function (n){
            if(n === val){
                return true;
            } else throw "Not Equal";
        },
        notToBe: function (n){
            if (n !== val) {
                return true;
            } else throw "Equal";
        }
    };
    return testObj
};
