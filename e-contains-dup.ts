// Determine if an array contains any duplicates using index signatures for the hash table.

function containsDuplicate(nums: number[]): boolean {
    // Your implementation here using { [key: number]: boolean }
    const seen: { [key: number]: boolean } = {}

    for(const num of nums) {
        if(seen[num])
        {
            return true;
        }
        seen[num] = true
    }

    return false
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false