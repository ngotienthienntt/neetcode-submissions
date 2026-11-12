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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let pre_idx = 0
        let indices = new Map();
        inorder.forEach((val, i) => indices.set(val, i));


        function dfs(start: number, end: number){
            if(start > end) return null;
            let rootVal = preorder[pre_idx]
            pre_idx = pre_idx + 1
            let currentNode = new TreeNode(rootVal)
            let rootIndexInorder = indices.get(rootVal)
            
            currentNode.left = dfs(start, rootIndexInorder - 1)
            currentNode.right = dfs(rootIndexInorder + 1, end)
            
            return currentNode
        }

        return dfs(0, inorder.length - 1)
    }
}
