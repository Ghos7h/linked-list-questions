class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

const sumList = (head, sum = 0) => {
    if (!head) return sum;
    return head.val + sumList(head.next);
}
console.log("🚀 ~ file: sumList.js:24 ~ sumList(a):", sumList(a))
console.log("🚀 ~ file: sumList.js:24 ~ sumList(a):", sumList(null))