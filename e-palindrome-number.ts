// Determine whether an integer is a palindrome. Implement proper type guards and handle edge cases.

function isPalindrome(x: number | string): x is number {
    // Your implementation here
    if(typeof x !== 'number')
        return false

    if(x < 0)
        return false

    const xAsString = "" + x

    for(let i = 0; i < Math.floor(xAsString.length / 2); i++)
    {
        if(xAsString[i] !== xAsString[xAsString.length - 1 - i]) {
            return false
        }
    }

    return true

}

// Test cases
console.log(isPalindrome(123321)); // false
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome("121")); // false (type guard)