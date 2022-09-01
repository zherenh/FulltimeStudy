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
            // init the new node
            let newNode:linklist = new Node(0);
            // when index = 0; means insert the node at the beginning
            if(index === 0){
                newNode.next = head;
                return newNode;
            }
            // because the operation of linklist hae to operate the head.next and head.next.next.
            // so index - 1 first, then looping
            index = index - 1;
            let output:linklist = head;
            // go to the where should insert the node
            while(index > 0){
                // add new node at the end
                if(head.next.next === undefined){
                    head.next.next = newNode;
                    return output;
                }
                head = head.next;
                index --;
            }
            // replace
            let tmp:linklist = head.next.next;
            head.next = newNode;
            newNode.next = tmp;
            return output;
        }
        console.log(insert(input, 6));
    }
)();