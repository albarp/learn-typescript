// Given an array of numbers and a target sum, 
// return the indices of two numbers that add up to the target. 
// The function should be strongly typed and handle edge cases.

function twoSum(nums: number[], target: number): number[] | null {
    // Your implementation here

    if(nums.length < 2)
        return null

    const res: number[] = []

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
            {
                res.push(i)
                res.push(j)
                return res
            }
        }
    }

    return res
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]