/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    if (list1 === null || list2 === null) {
        return list1 === null ? list2 : list1;
    }
    
    let pointer1 = list1.val <= list2.val ? list1 : list2;
    let pointer2 = pointer1 === list1 ? list2 : list1;
    
    const head = pointer1;
    head.next = mergeTwoLists(pointer1.next, pointer2);
    
    return head;
};