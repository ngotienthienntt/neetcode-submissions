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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let output = []
        this.dfs(root, output, 0)
        return output

    }

    dfs(root: TreeNode, output: any, depth){
        if(!root) return

        if(output[depth]){
            output[depth].push(root.val)
        }else{
            output.push([root.val])
        }

        if(root.left){
            this.dfs(root.left, output, depth + 1)
        }

        if(root.right){
            this.dfs(root.right, output, depth + 1)
        }
    }
}
