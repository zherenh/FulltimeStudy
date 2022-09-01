/*
    Length of the linklist
*/
(function () {
    var Node = /** @class */ (function () {
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
    function Length(input) {
        var count = 0;
        if (input) {
            count += 1;
        }
        while (input.next) {
            count++;
            input = input.next;
        }
        return count;
    }
    console.log(Length(input));
})();
