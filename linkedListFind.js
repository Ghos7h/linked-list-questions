class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const linkedListFind = (head, item) => {
    if (!head) return false;
    if (head.val === item) return true;
    return linkedListFind(head.next, item);
}
console.log("🚀 ~ file: linkedListFind.js:23 ~ linkedListFind ~ linkedListFind(a, 'A'):", linkedListFind(a, 'A'))
console.log("🚀 ~ file: linkedListFind.js:23 ~ linkedListFind ~ linkedListFind(a, 'A'):", linkedListFind(a, 'Z'))