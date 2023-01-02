interface Food {
    name: String,
    price: String,
    description: String
}


const foods: Array<Food> = [
    {
        name: "Fried Chicken",
        price: "$39",
        description: "golden, crisp"
    },
    {
        name: "Cheeseburger",
        price: "$2.8",
        description: "Sour"
    }, {
        name: "Chocolate Quick Puff Pastry",
        price: "$20",
        description: "beautiful"
    }
    , {
        name: "Dumpling",
        price: "$3",
        description: "East favorite"
    }
];


function query(name: string) {
    let result = [];

    for (let i = 0; i < foods.length; i++) {
        let food = foods[i];
        if (food.name.toLowerCase().indexOf(name) !== -1) {
            result.push(food);
        }
    }
    return result;
}

export const handler = async (event: any) => {

    //if no name param in query string, header and json body(if put or post), return []
    let result: Array<Food> = [];


    let requestMethod = event.requestContext?.http?.method?.toLowerCase();

    if (event && event.queryStringParameters && event.queryStringParameters.name) {
        let name = event.queryStringParameters.name;
        result = query(name);

    } else if (event && event.headers && event.headers.name) {
        let name = event.headers.name;
        result = query(name);

    } else if (requestMethod && (requestMethod === "put" || requestMethod === "post")) {
        try {
            let request = JSON.parse(event.body);
            result = query(request.name);
        } catch (e) {
        }
    }


    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(result),
    };

};
