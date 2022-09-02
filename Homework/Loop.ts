(
    () => {
        const arrAges = [10, 20, 30, 40];
        // ES5:
        const es5Result = arrAges.forEach(function (item) {
            return item * 2;
        });
        console.log(es5Result); // undefined
        console.log(arrAges); // [ 10, 20, 30, 40 ]

        // ES6:
        const es6Result = arrAges.forEach((item) => item * 2);
        console.log(es6Result); // undefined
        console.log(arrAges); // [ 10, 20, 30, 40 ]

        const arrAges1 = [10, 20, 30, 40];
        // ES5:
        const es5Result1 = arrAges1.map(function (item) {
            return item * 2;
        });
        console.log(es5Result1); // [ 20, 40, 60, 80 ]

        // ES6:
        const es6Result1 = arrAges.map((item) => item * 2);
        console.log(es6Result1); // [ 20, 40, 60, 80 ]
    }
)();