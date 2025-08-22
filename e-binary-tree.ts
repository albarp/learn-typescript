// Given the root of a binary tree, return the inorder traversal using optional chaining.

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    // Your implementation here
    const res: number[] = []

    innerInorderTraversal(root, res)

    return res
}

function innerInorderTraversal(root: TreeNode | null , res: number[]): void {

    if(!root) return

    innerInorderTraversal(root.left, res)

    res.push(root.val)

    innerInorderTraversal(root.right, res)
}

// Test Case 1: Regular binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5
const four = new TreeNode(4)
const five = new TreeNode(5)
const two = new TreeNode(2, four, five)
const three = new TreeNode(3)
const one = new TreeNode(1, two, three)

const path = inorderTraversal(one)
console.log(path)

// Test Case 6: Complex tree
//         1
//       /   \
//      2     3
//     / \   /
//    4   5 6
//   /
//  7
const seven_t2 = new TreeNode(7)
const four_t2 = new TreeNode(4, seven_t2)
const five_t2 = new TreeNode(5)
const two_t2 = new TreeNode(2, four_t2, five_t2)
const six_t2 = new TreeNode(6)
const three_t2 = new TreeNode(3, six_t2)
const one_t2 = new TreeNode(1, two_t2, three_t2)
const path_t2 = inorderTraversal(one_t2)
console.log(path_t2)
