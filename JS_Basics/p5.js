const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const merge = (...objects) =>  objects.reduce((acc, cur) => ({
    ...acc, ...cur
})) ;

console.log(merge(obj1, obj2)); // { foo: "baz", x: 42, y: 13 }