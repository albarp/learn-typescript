// Given an array of numbers and a target sum, 
// return the indices of two numbers that add up to the target. 
// The function should be strongly typed and handle edge cases.

function twoSum(nums: number[], target: number): number[] | null {
    // Your implementation here

    if(nums.length < 2)
        return null

    // the idea is to keep trak of numbers, and they position, that have already been extracted
    // and at each step search in this pool if we have the complement

    const complementSet = new Map<number, number>()

    for(let i = 0; i < nums.length; i++) {

        const currentComplement = target - nums[i]

        if(complementSet.has(currentComplement)) {
            return [complementSet.get(currentComplement)!, i]
        }
        else{
            complementSet.set(nums[i], i)
        }

    }

    return []
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]