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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
         if(!root) return false // nếu bỏ đi sẽ bị infinite loop vì cứ gọi isSubtree với root là undefined
        let isSameRoot = root?.val == subRoot.val
        if(isSameRoot){

            if(!root) return true
            let isSubTreeLeft = true
            let isSubTreeRight = true

            if(root?.left || subRoot?.left)
                isSubTreeLeft = this.isSameTree(root?.left, subRoot?.left)

            if(root?.right || subRoot?.right)
                isSubTreeRight = this.isSameTree(root?.right, subRoot?.right)

            if(isSubTreeLeft && isSubTreeRight) return true
           
        }

           let leftCheck = this.isSubtree(root?.left, subRoot)
           let rightCheck = this.isSubtree(root?.right, subRoot)
            return leftCheck || rightCheck
        

       

    }

    isSameTree(p: TreeNode, q: TreeNode){

        let isSameRoot = (p?.val == q?.val)
        if(!isSameRoot) return false

        let isSameLeft = true
        let isSameRight = true

        if(p?.left || q?.left)
            isSameLeft = this.isSameTree(p.left, q.left)

        if(q?.left || q?.right)
            isSameRight = this.isSameTree(p.right, q.right)

        return isSameLeft && isSameRight
    }
}
