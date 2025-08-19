// Convert roman numerals to integers 
// using string literal types for validation.

type RomanNumeral = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

const match: Record<RomanNumeral, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function isValidRomanNumeral(char: string): char is RomanNumeral{
    return char in match
}

function romanToInt(s: string): number {
    // Your implementation here

    for(let i = 0; i < s.length; i++) {
        if(!isValidRomanNumeral(s[i]))
            throw new Error(`Invalid Roman Numeral: ${s[i]}`)
    }

    let res = 0
    let i = 0
    for(; i < s.length - 1; i++) {
        let arabicNum1 = match[s[i] as RomanNumeral]
        let arabicNum2 = match[s[i+1] as RomanNumeral]

        if(arabicNum1 < arabicNum2) {
            res += (arabicNum2 - arabicNum1)
            i++
        }
        else{
            res += arabicNum1
        }
    }

    if(i < s.length) {
        let arabicNum1 = match[s[i] as RomanNumeral]
        res  += arabicNum1
    }

    return res
}

// Test cases
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXC")); // 1990