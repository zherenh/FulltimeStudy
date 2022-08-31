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
        var output = head;
        while (index > 0) {
            head = head.next;
            index--;
        }
        var tmp = head;
        var newNode = new Node(0);
        head.next = newNode;
        newNode.next = tmp.next.next;
        return output;
    }
    console.log(insert(input, 1));
})();
