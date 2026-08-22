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
        let sortedLink =  this.recursiveMerge(null, list1, list2)
        return sortedLink
    }

    recursiveMerge(sortedLink, list1, list2){
        if(list1 && list2){
            if(list1.val < list2.val){
                sortedLink = new ListNode(list1.val, null)
                sortedLink.next = this.recursiveMerge(null, list1.next, list2)
                return sortedLink
            }else{
                sortedLink = new ListNode(list2.val, null)
                sortedLink.next = this.recursiveMerge(sortedLink.next, list1, list2.next)
                return sortedLink
            }
        }else if (list1 && !list2){
            sortedLink = new ListNode(list1.val, null)
            sortedLink.next = this.recursiveMerge(sortedLink.next, list1.next, list2)
            return sortedLink
        }else if (!list1 && list2){
            sortedLink = new ListNode(list2.val, null)
            sortedLink.next = this.recursiveMerge(sortedLink.next, list1, list2.next)
            return sortedLink
        }else{
            return sortedLink
        }
    }
}
