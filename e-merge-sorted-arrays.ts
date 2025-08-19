// Merge two sorted arrays into one sorted array. 
// Use readonly types for input parameters.

function merge(nums1: readonly number[], nums2: readonly number[]): number[] {
    // Your implementation here

    const res: number[] = []

    let i = 0
    let j = 0
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] <= nums2[j]) {
            res.push(nums1[i])
            i++
        }
        else {
            res.push(nums2[j])
            j++
        }
    }

    while(i < nums1.length) res.push(nums1[i++])
    while (j < nums2.length) res.push(nums2[j++])

    return res
}

// Test cases
console.log(merge([1, 2, 3], [2, 5, 6])); // [1, 2, 2, 3, 5, 6]