/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
    let maxScore = 0;

    let leftZeros = 0;
    let rightOnes = (s.match(/1/g) || []).length; //regex to find all '1'

    // Iterate through the string except the last character
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }
        
        // Update the maximum score
        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }
    
    return maxScore;
}