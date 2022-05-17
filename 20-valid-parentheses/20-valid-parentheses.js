/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const brackets = [];
    
    for (let i = 0; i < s.length; i ++) {
        switch (s[i]) {
            case '{':
                brackets.push(s[i]);
                break;
            case '(':
                brackets.push(s[i]);
                break;
            case '[':
                brackets.push(s[i]);
                break;
            case '}':
                if (brackets[brackets.length - 1] === '{') {
                    brackets.pop();
                } else {
                    return false
                }
                break;
            case ')':
                if (brackets[brackets.length - 1] === '(') {
                    brackets.pop();
                } else {
                    return false;
                }
                break;
             case ']':
                if (brackets[brackets.length - 1] === '[') {
                    brackets.pop();
                } else {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    
    if (brackets.length) {
        return false;
    }
    
    return true;
};