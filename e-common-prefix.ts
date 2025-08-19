// Find the longest common prefix string amongst an array of strings 
// using template literal types.

function longestCommonPrefix(strs: string[]): string {
    // Your implementation here

    let res = ""

    if(strs.length === 0) return ""

    for(let i = 0; i < strs[0].length; i++) { // check all indexes
        let char = strs[0][i]
        for(let j = 1; j< strs.length; j++) { // check all strings
            if(i >= strs[j].length  || strs[j][i] !== char)
                return res
        }

        res += char
    }

    return res
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""