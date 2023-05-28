class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const reverseList = (head) => {
    let prev = null,
        current = head,
        next = current.next,
        temp;
    while (current) {

        next = current.next
        current.next = prev;
        prev = current;
        current = next
    }
    console.log('current = ', prev)
    return prev

}

console.log(reverseList(a));

const a1 = new Node('A');
const b1 = new Node('B');
const c1 = new Node('C');
const d1 = new Node('D');

a1.next = b1;
b1.next = c1;
c1.next = d1;

const recursiveReverseList = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return recursiveReverseList(next, head);
}
console.log(recursiveReverseList(a1));