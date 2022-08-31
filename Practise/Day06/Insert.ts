/*
insert a new node inside a linklist
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

        function insert(head: linklist, index:number): linklist {
            let output:linklist = head;
            while(index > 0){
                head = head.next;
                index --;
            }
            let tmp:linklist = head;
            let newNode:linklist = new Node(0);
            head.next = newNode;
            newNode.next = tmp.next.next;
            return output;
        }
        console.log(insert(input, 1));
    }
)();