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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        let lowest = [null]

        this.findLowestCommonAncestor(root, p, q, lowest)
        return lowest[0]
    }

    findLowestCommonAncestor(root, p, q, lowest){
        if(!root) return
        let checkPacestor = this.isAncestor(root, p)
        let checkQacestor = this.isAncestor(root, q)

        if(checkPacestor && checkQacestor){
            lowest[0] = root
            // lowest[0] = 
            // lowest[0] == null || (root.val >= p.val && root.val <= q.val)? root : lowest[0]
        }

        if(root.left){
            this.findLowestCommonAncestor(root.left, p, q, lowest)
        }

        if(root.right){
            this.findLowestCommonAncestor(root.right, p, q, lowest)
        }

    }

    isAncestor(root: TreeNode, child: TreeNode){
        if(!root) return false
        if(root.val == child.val) return true

        let isLeftAcestor = false
        let isRightAcestor = false
        if(root?.left){
            isLeftAcestor = this.isAncestor(root.left, child)
        }

        if(root?.right){
            isRightAcestor = this.isAncestor(root.right, child)
        }

        return isLeftAcestor || isRightAcestor
    }
}
