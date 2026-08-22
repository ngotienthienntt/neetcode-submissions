/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let sortedLink = new ListNode()
        let temp = sortedLink

        while(list1 || list2){
            let newNode
            if(list1 && list2){
                if(list1.val <= list2.val){
                    newNode = new ListNode(list1.val, null)
                    list1 = list1.next
                }else{
                    newNode = new ListNode(list2.val, null)
                    list2 = list2.next
                }
            }else if(list1 && !list2){
                newNode = new ListNode(list1.val, null)
                list1 = list1.next
            }else if(!list1 && list2){
                newNode = new ListNode(list2.val, null)
                    list2 = list2.next
            }

            temp.next = newNode
            temp = temp.next
        }

        return sortedLink.next
    }
}
