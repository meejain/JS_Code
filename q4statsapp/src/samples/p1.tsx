let products = [
{id:1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{id:2,"name":"Onida","price":4444.44,"category" : "tv"},
{id:3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{id:4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{id:5,"name":"Samsung","price":68000.00,"category" : "tv"}];

  
export default function ProductList() {
return <div>
{    
products.map((p,index) => <h1> {index+1}, {p.name}, {p.price}, {p.category} </h1>)
// products.map((p,index) => <h{index+1}> {index+1}, {p.name}, {p.price}, {p.category} </h{index+1}>)
}
</div>
}products
 
