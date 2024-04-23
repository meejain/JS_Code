interface Product1 {
    id:number;
    name:string;
    price:number;
    category:string
}

var nos:number[] = [3,43,21,23];

var products1:Product1[]= [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
]

function forEach(elems, action): void{
    let i: number;
    for(i=0;i<elems.length;i++){
        action(elems[i]);
    }
}

function forEach1(elems:number[], action:(elem:number) => void) : void {
    let i: number;
    for(i=0;i<elems.length;i++){
        action(elems[i]);
    }
}

function forEach2<T>(elems:T[], action:(elem:T) => void) : void {
    let i: number;
    for(i=0;i<elems.length;i++){
        action(elems[i]);
    }
}



forEach1(nos, console.log);
forEach(nos, alert);
forEach(nos, document.write);
forEach2(products1, console.log);

