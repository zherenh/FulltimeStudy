(
    () => {
        class Node<T>{
            value: any;
            next: T;
            // 默认传一个元素进来
            constructor(value: any) {
                this.value = value;
                this.next = undefined;
            }
        }
        let linkLst = new Node(1);
        linkLst.next = new Node(2);
    }
)();
(
    // double direction linklist
    () => {
        class Node<T>{
            value: any;
            next: T;
            head: T;
            constructor(value: any,head:T) {
                this.value = value;
                this.next = undefined;
                this.head = head;
            }
        }
        let linkLst = new Node(1,null);
        linkLst.next = new Node(2, linkLst);
        linkLst.next.next = new Node(3, linkLst.next);
        console.log(linkLst);
    }
)();