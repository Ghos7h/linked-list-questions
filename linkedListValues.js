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

a.next = b; b.next = c; c.next = d;

const linkedListValues = (head, list = []) => {
    if (!head.next) {
        list.push(head.val);
        return list;
    }
    list.push(head.val);
    return linkedListValues(head.next, list);
}

console.log("🚀 ~ file: linkedListValues.js:23 ~ linkedListValues(a):", linkedListValues(a));