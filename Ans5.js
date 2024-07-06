function checkIfValidParenthesis(str) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (char !== map[top]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(checkIfValidParenthesis("()"));
console.log(checkIfValidParenthesis("(){}[]"));
console.log(checkIfValidParenthesis("([})"));
console.log(checkIfValidParenthesis("[({})]"));
console.log(checkIfValidParenthesis(""));
