// Given a string containing only parentheses, brackets, and braces, 
// determine if the input string is valid. 
// Use union types for the bracket characters.

type Bracket = '(' | ')' | '[' | ']' | '{' | '}';

function isValid(s: string): boolean {
    // Your implementation here
    const last: Bracket[] = []
    const matches: Record<string, Bracket> = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < s.length; i++){
        if(last.length === 0) {
            last.push(s[i] as Bracket)
        }
        else{
            const currentBracket = s[i] as Bracket
            const lastBracket = last.pop()
            if(currentBracket !== matches[lastBracket!]){
                return false
            }
        }
    }

    if(last.length === 0)
        return true
    else
        return false

}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false