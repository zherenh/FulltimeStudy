(function () {
    var Node = /** @class */ (function () {
        // 默认传一个元素进来
        function Node(value) {
            this.value = value;
            this.next = undefined;
        }
        return Node;
    }());
    var linkLst = new Node(1);
    linkLst.next = new Node(2);
})();
(
// double direction linklist
function () {
    var Node = /** @class */ (function () {
        function Node(value, head) {
            this.value = value;
            this.next = undefined;
            this.head = head;
        }
        return Node;
    }());
    var linkLst = new Node(1, null);
    linkLst.next = new Node(2, linkLst);
    linkLst.next.next = new Node(3, linkLst.next);
    console.log(linkLst);
})();
