/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

// Links
// https://medium.com/@jonathanjuliani/estruturas-de-dados-em-a%C3%A7%C3%A3o-dominando-listas-ligadas-linked-lists-em-nodejs-javascript-70d69afc4638

class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(data) {
        let newNode = new SinglyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
}

const size = () => {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

function printLinkedList(head) {
    let node = head;
    while(node !== null) {
        console.log(node.data);
        node = node.next;
    }
}

function reversePrint(llist) {
    if (!llist) return;
    
    let node = llist;
    let arr = [];
    
    while(node !== null) {
        if (node.data !== null) arr.push(node.data);
        node = node.next;
    }
    
    while (arr.length > 0) {
        console.log(arr.pop());
    }
}

function reversePrintRecursive(llist) {
    if (!llist) {
        return;
    }

    reversePrint(llist.next);
    console.log(llist.data);
}


function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    
    if (head === null) {
        return newNode;  
    }
    
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;
 
    return head;
}

function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    
    if (llist === null) return newNode;
      
    let current = llist;
    let currentPosition = 0;
    
    while (current.next !== null) {
        currentPosition++;
        
        if (currentPosition === position) {
            newNode.next = current.next;
            
            current.next = newNode;
        } 
        
        current = current.next;
    }
    
    return llist;
}

function deleteNode(llist, position) { 
    let current = llist;
    let currentPosition = 0;
    
    if (position === 0) {
        llist = llist.next;
        return llist;
    }
        
    while (current.next !== null) {
        currentPosition++;
        
        if (currentPosition === position) {
            const nextOne = current.next;
            
            if (nextOne.next !== null) {
                current.next = nextOne.next;
            } else {
                return;
            }
        } 
        
        current = current.next;
    }
    
    return llist;
}

const reverseList = (head) => {
    let prev = null; // 👈 Previous node (starts as null)
    let current = head; // 👉 Current node we're processing
    
    while (current !== null) {
        const nextTemp = current.next; // 💾 Save the next node before we lose it
        
        current.next = prev; // 🔄 Reverse the link
        prev = current; // 📋 Move pointers forward
        
        current = nextTemp;
    }
    
    // prev is now the new head
    return prev;
};

const main = () => {
    const llistCount = 5;

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        llist.insertNode(i+1);
    }

    printLinkedList(llist.head);
    console.log("Operations:")
    let result = null;
    result = insertNodeAtTail(llist.head, 99);
    console.log("insertNodeAtTail:")
    console.log(printLinkedList(result));

    result = deleteNode(llist.head, 2);
    console.log("deleteNode:")
    console.log(printLinkedList(result));
}

main();