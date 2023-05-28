class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('A');
const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const a1 = new Node('A1');
const b1 = new Node('B1');
// const c1 = new Node('C1');
// const d1 = new Node('D1');

a1.next = b1;
b1.next = c1;
c1.next = d1;


const zipperList = (head1, head2) => {
    let c = 0, merged = head1, current1 = head1.next, current2 = head2;
    while (current1 && current2) {
        if(c%2==0) {
            merged.next = current2;
            current2 = current2.next;
        }
        else {
            merged.next =  current1;
            current1 = current1.next;
        }
        merged = merged.next
        c++;
    }
    if(!current1) merged.next = current1;
    if(!current2) merged.next = current2;
    return head1
}

console.log(zipperList(a, a1))


const recursiveZipperList = (h1, h2) => {
    if(!h1 && !h2) return null;
    if(!h1) return h2;
    if(!h2) return h1;
    const n1 = h1.next;
    const n2 = h2.next;
    h1.next = h2;
    h2.next = recursiveZipperList(n1, n2);
    return h1;
}

recursiveZipperList(a, a1)