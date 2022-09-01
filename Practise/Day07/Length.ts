/*
    Length of the linklist
*/
(
    ()=>{
        interface linklist {
            value: any;
            next: any;
        }
        class Node implements linklist {
            value: any;
            next: any;
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

        function Length(input:linklist):number{
            let count:number = 0;
            // check whether the input linklist has value
            if(input){
                count += 1;
            }
            // count ++ till input.next is undefined
            while(input.next){
                count++;
                input = input.next;
            }
            return count;
        }
        console.log(Length(input));// 6
    }
)();