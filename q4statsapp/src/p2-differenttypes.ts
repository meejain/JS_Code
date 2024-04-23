type Person = {
name: String;
age: number;
}

let p1:Person={name:"Meet", age:39};
let p2:Person={name:"Vansh", age:14};

interface Product {
    name:String;
    price:Number;
}

interface Mobile extends Product {
    camera?: string;
    connectivity:string;
}

interface tv extends Product {
    sreentype: String;
}

let p3:Mobile={name: "Iphone1", price:89000, camera:"68Mp", connectivity:"5G"};
let p4:Mobile={name: "Iphone2", price:89000, connectivity:"5G"};
let p5:tv={name: "Iphone2", price:89000, connectivity:"5G",sreentype:"NA" };

console.log(p3.name)

interface Renderer {
    method1(): void;
}

class r1 implements Renderer {
    name:string;
    price:number;
    method1(){
        console.log("hey");
    }
}


var products:Product[]=[
    {name: "Iphone1", price:89000,
    name: "Iphone2", price:89000}
]

var no:number[] = [3,43,21,23]







