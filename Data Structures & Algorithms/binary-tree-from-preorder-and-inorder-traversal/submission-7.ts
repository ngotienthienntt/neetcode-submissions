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
        let pre_root = 0

        function dfs(start, end){
            // start và end là vị trí của inorder chứ không phải preorder nên không dùng start để lấy root được
            // lấy root ở preorder dựa vào pre_root tăng dần dựa vào thứ tự gọi dfs nên sẽ khớp với root của từng subtree
            if(start > end) return null
            const rootVal = preorder[pre_root]
            const newNode = new TreeNode(rootVal)
            const rootIndexInorder = inorder.indexOf(rootVal)
            pre_root = pre_root + 1

            newNode.left = dfs(start, rootIndexInorder - 1)
            newNode.right = dfs(rootIndexInorder + 1, end)

            return newNode
        }

        return dfs(0, inorder.length - 1)
    }
}
