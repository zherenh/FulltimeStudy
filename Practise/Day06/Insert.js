/*
insert a new node inside a linklist
*/
(function () {
    var Node = /** @class */ (function () {
        // 默认传一个元素进来
        function Node(value) {
            this.value = value;
            this.next = undefined;
        }
        return Node;
    }());
    var node1 = new Node(1);
    node1.next = new Node(2);
    var node2 = node1.next;
    node2.next = new Node(3);
    var node3 = node2.next;
    node3.next = new Node(4);
    var node4 = node3.next;
    node4.next = new Node(5);
    var node5 = node4.next;
    node5.next = new Node(6);
    var input = node1;
    function insert(head, index) {
        // init the new node
        var newNode = new Node(0);
        // when index = 0; means insert the node at the beginning
        if (index === 0) {
            newNode.next = head;
            return newNode;
        }
        // because the operation of linklist hae to operate the head.next and head.next.next.
        // so index - 1 first, then looping
        index = index - 1;
        var output = head;
        // go to the where should insert the node
        while (index > 0) {
            if (head.next.next === undefined) {
                head.next.next = newNode;
                return output;
            }
            head = head.next;
            index--;
        }
        // replace
        var tmp = head.next.next;
        head.next = newNode;
        newNode.next = tmp;
        return output;
    }
    console.log(insert(input, 6));
})();
