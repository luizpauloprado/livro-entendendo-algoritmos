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

function CompareLists(llist1, llist2) {
    let current1 = llist1;
    let current2 = llist2;
    let result = 1; //1 equal and 0 diff
    
    while (current1.next !== null && current2.next !== null) {
        if (current1.data !== current2.data) {
            result = 0;
            return;
        }
        
        current1 = current1.next;
        current2 = current2.next;
    }
    
    if (current1.next === null && current2.next !== null) {
        result = 0;
    }
    
    if (current1.next !== null && current2.next === null) {
        result = 0;
    }
    
    return result;
}

function getNodeCountingBackwards(llist, positionFromTail) {
    let prev = null;
    let current = llist;
    
    while (current != null) {
        let nextTemp = current.next;
        
        current.next = prev;
        prev = current;
        
        current = nextTemp;
    }
    
    let currentInverted = prev;
    let currentPosition = 0;
    let result = null;
    while (currentInverted != null) {
        if (currentPosition === positionFromTail) result = currentInverted.data;
        currentInverted = currentInverted.next;
        currentPosition++;
    }
    
    return result;
}

function mergeLists(head1, head2) { 
    if (head1 === null) return head2;
    if (head2 === null) return head1;
  
    let mergedList = new SinglyLinkedListNode(0);
    let current = mergedList;
    
    while (head1 !== null && head2 !== null) {
        if (head1.data <= head2.data) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        
        current = current.next;
    }
    
    if (head1 !== null) current.next = head1;
    if (head2 !== null) current.next = head2;
    
    return mergedList.next;
}

function hasCycle(head) {
    // Edge case: empty list or single node without cycle
    if (!head || !head.next) {
        return 0;
    }
    
    // Initialize two pointers
    let slow = head;      // 🐢 Tortoise - moves 1 step
    let fast = head;      // 🐰 Hare - moves 2 steps
    
    // Continue until fast pointer reaches the end
    while (fast && fast.next) {
        slow = slow.next;           // Move slow pointer 1 step
        fast = fast.next.next;      // Move fast pointer 2 steps
        
        // If pointers meet, there's a cycle! 🎯
        if (slow === fast) {
            return 1;
        }
    }
    
    // Fast pointer reached the end - no cycle
    return 0;
}

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