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
        // preorder: decide which next node is created (i)
        // inorder: mark which node was created(fishnis) (j)

        // B1: Tạo node mới từ preorder với left = null, right=current.right và lưu node hiện tại vào right node để có trể truy vết ngược lại thay vì dùng đệ quy ()
        // qua note right và tăng i qua để tạo node ở preorder tiếp theo
        // tại sao right = current.right ( để trỏ về node cha của node hiện tại trong trường hợp tạo cây con bên phải khi quay về)

        // B2: Tạo cây con trái đến khi nào mà là node trái ngoài cùng (node bên trái ngoài cùng trong inorder)

        // B3: Quay về node cha đã được đánh dấu hoành thành (curr.right.val == inorder[j])

        let head = new TreeNode()
        let curr = head
        let i = 0;
        let j = 0
        const n = preorder.length

        while(i < n && j < n){
            //B1
            curr.right = new TreeNode(preorder[i], null, curr.right)
            curr = curr.right
            i++

            //B2
            while(i < n && curr?.val != inorder[j]){
                curr.left = new TreeNode(preorder[i], null, curr)
                curr = curr.left
                i++
            }
            j++

            while(j < n && curr?.right?.val == inorder[j]){
                let prev = curr.right
                curr.right = null
                curr = prev
                j++
            }
        }

        return head.right
    }
}
