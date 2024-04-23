var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];


var sum = products.filter((x) => { return x.category === 'mobile';}).map((y) => { return y.price;}).reduce((accum,current) => { accum=accum+current; return accum;}, 0);
console.log(sum);

var groupby = (pro, key) => {
    return pro.reduce((accum, current) => {
        if (!accum[current[key]]) {
            accum[current[key]] = [];
        }
        accum[current[key]].push(current);
        return accum;
    }, {});
}

console.log(groupby(products, 'category'));
