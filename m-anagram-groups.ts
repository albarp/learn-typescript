// Group anagrams together using mapped types for the result structure.

type AnagramGroups = {
    [key: string]: string[];
};

function groupAnagrams(strs: string[]): string[][] {
    // Your implementation here
    const groups: AnagramGroups = {}
    for(const str of strs){
        const sortedString = str.split('').sort().join('')
        if(!groups[sortedString])
            groups[sortedString] = []

        groups[sortedString].push(str)
    }

    return Object.values(groups)
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]