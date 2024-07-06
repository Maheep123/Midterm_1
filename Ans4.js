class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function checkIfCycleExists(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Helper function to create a linked list from an array
function createLinkedList(arr, pos) {
    if (arr.length === 0) {
        return null;
    }
    
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    if (pos === 0) {
        cycleNode = head;
    }

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) {
            cycleNode = current;
        }
    }

    if (pos >= 0) {
        current.next = cycleNode;
    }

    return head;
}


let headNode1 = createLinkedList(["A", "B", "C"], 0);
console.log(checkIfCycleExists(headNode1));

let headNode2 = createLinkedList(["1", "2", "3"], -1);
console.log(checkIfCycleExists(headNode2));

let headNode3 = createLinkedList(["1", "2", "3"], 0);
console.log(checkIfCycleExists(headNode3));
