/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(!root) return 0
        let stack = [root]
        let max = 0
        
        while(stack.length > 0){
            let node = stack.pop()
            let lenNode = this.depth(node.left) + this.depth(node.right)
            max = Math.max(lenNode, max)

            if(node.left){
                stack.push(node.left)
            }

            if(node.right){
                stack.push(node.right)
            }
        }

        return max
    }

    depth(root: TreeNode){
        if(!root) return 0

        let left = this.depth(root.left) + 1
        let right = this.depth(root.right) + 1

        return Math.max(left, right)
    }
}
