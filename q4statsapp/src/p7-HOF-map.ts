interface Product {
	id:number;
	name:string;
	price:number;
	category:string
}

let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

var nos:number[] = [5,2,66,11];

function map<T, R>(elems1:T[], transformFn1:(elem:T) => R):R[]  {
	let res:R[] = [];
	let i:number;
	for(i = 0; i < elems1.length; i++ ) {
		 res.push(transformFn1(elems[i]));
	}
	return res;
}

var doubles:number[] = map(nos, (e => e * 2));

var names:string[] = map(products3, (e => e.name));

function forEach<T>(elems:T[], action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		action(elems[i]);
	}
}


forEach(doubles, console.log);
forEach(names, console.log);


