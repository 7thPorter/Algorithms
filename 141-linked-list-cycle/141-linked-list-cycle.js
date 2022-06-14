/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// const hasCycle = function(head, list = {}) {
//     if (head === null ) {
//         return false;
//     } else if (list[head.val]) {
//         return true;
//     }
    
//     list[head.val] = 1;
//     return hasCycle(head.next, list);
// };

const hasCycle = function(head) {
    if (!head) {
        return false;
    }
    
    let pointer1 = head;
    let pointer2 = head.next;
    
    if (pointer1 === null || pointer2 === null) {
        return false;
    }
    
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next?.next;
        
        if (!pointer2) {
            return false;
        }
    }
    
    return true;
};