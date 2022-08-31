/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/
(
    () => {
        interface linklist {
            value: any;
            next: any;
        }
        class Node<T> implements linklist {
            value: any;
            next: any;
            // 默认传一个元素进来
            constructor(value: any) {
                this.value = value;
                this.next = undefined;
            }
        }
        let node1 = new Node(1);
        node1.next = new Node(2);
        let node2 = node1.next;
        node2.next = new Node(3);
        let node3 = node2.next;
        node3.next = new Node(4);
        let node4 = node3.next;
        node4.next = new Node(5);

        let node5 = node4.next;
        node5.next = new Node(6);

        let input = node1;

        function Middle(head: linklist): linklist {
            let tmp:linklist = head;
            while(tmp.next !== undefined){
                if(tmp.next.next === undefined){
                    head = head.next;
                    break;
                }
                tmp = tmp.next.next;
                head = head.next
            }
            return head;
        }
        console.log(Middle(input));
    }
)();