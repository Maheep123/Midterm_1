function generatePermutations(str) {
    const results = [];

    function permute(arr, memo = '') {
        if (arr.length === 0) {
            results.push(memo);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), memo + next);
            }
        }
    }

    permute(str.split(''));
    return results;
}

let input1 = "AB";
console.log(generatePermutations(input1));

let input2 = "A";
console.log(generatePermutations(input2));

let input3 = "ABC";
console.log(generatePermutations(input3));
