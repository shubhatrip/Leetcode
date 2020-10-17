/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    
    var pA = headA;
    var pB = headB;
    var lastA, lastB;
    
    while(pA && pB){
        if(lastA && lastB && lastA.val !== lastB.val) return null;
        if(pA === pB) return pA;
        else {
            if(pA.next == null) {
                lastA = pA;
                pA = headB;
            } else pA = pA.next;
            if(pB.next == null) {
                lastB = pB;
                pB = headA;
            } else pB = pB.next;
        }
    }
};
