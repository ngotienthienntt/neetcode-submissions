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
        let globalMax = [0]
        this.dfs(root, globalMax)
        return globalMax[0]
    }

    dfs(root: TreeNode, globalMax: any){
        
        if(!root) return 0

        // không nên cộng 1 vào trước ở bước này vì khi so sánh với res sẽ bị dupble + 1 ỏ
        // phần left + right
        let left = this.dfs(root.left, globalMax)
        let right = this.dfs(root.right, globalMax)
        globalMax[0] = Math.max(globalMax[0], left + right)

        return Math.max(left, right) + 1
        
    }
}
