// Remove duplicates from a sorted array in-place and return the length of the unique elements.


function removeDuplicates<T>(nums: T[]): number {
    // Your implementation here
    
    if(nums.length === 0) return 0

    let lastUniqueIndex = 1
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[lastUniqueIndex] = nums[i]
            lastUniqueIndex++
        }
    }

    nums.length = lastUniqueIndex

    return lastUniqueIndex
}

// Test cases
const arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); // 2
console.log(removeDuplicates(arr1.slice(0, 2))); // arr1 is now [1, 2]