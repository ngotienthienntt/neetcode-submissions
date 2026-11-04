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
//BFS
class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if(root == null) return null
        let queue = [root]
        while(queue.length > 0){
            let tempNode = queue[0]
            queue.splice(0, 1)
            let left = tempNode.right
            let right = tempNode.left
            tempNode.left = left
            tempNode.right = right
            if(left)
                queue.push(left)
            if(right)
                queue.push(right)
        }

        return root
    }
}
