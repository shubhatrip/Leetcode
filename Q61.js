/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var len = 0;
    var node = head;
    var last;
    while(node) {
        if(node.next === null) last = node;
        node = node.next;
        len++;
    }
    
    if(k>len) k = k%len
    if(k==0) return head;
    k = (len-k-1)%len;
    
    
    var newHead = head;
    if(k===len-1) {
        last.next = newHead;
        newHead = newHead.next;
        head.next = null;
        return newHead;
    }    
    
    while(k>=0) {
        if(k===0){
            var temp = newHead.next;
            newHead.next = null;
            newHead = temp;
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = head;
        } else newHead = newHead.next;
        k--;
    }
    return newHead;
};
