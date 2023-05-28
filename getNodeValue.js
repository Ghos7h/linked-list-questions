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

const getNodeValue = (head, index, count = 0) => {
    if (!head) return null;
    if (index === count) return head.val;
    count++;
    return getNodeValue(head.next, index, count)
}
console.log("🚀 ~ file: getNodeValue.js:21 ~ getNodeValue ~ getNodeValue(head.next, index, count):", getNodeValue(a, 2))
console.log("🚀 ~ file: getNodeValue.js:21 ~ getNodeValue ~ getNodeValue(head.next, index, count):", getNodeValue(a, 0))
console.log("🚀 ~ file: getNodeValue.js:21 ~ getNodeValue ~ getNodeValue(head.next, index, count):", getNodeValue(a, 10))
console.log("🚀 ~ file: getNodeValue.js:21 ~ getNodeValue ~ getNodeValue(head.next, index, count):", getNodeValue(null, 0))