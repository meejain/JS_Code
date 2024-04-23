let data:any=45
data="Meet"

let data1:unknown=50
data1="Meet1"

function doTask(arg:any): void {
    if(typeof arg === 'function'){arg();} else if(typeof arg === 'string'){console.log(arg);}
    arg()
}

doTask("Hey How are u");

function doTask1(arg:unknown): void {
    if(typeof arg === 'function'){arg();} else if(typeof arg === 'string'){console.log(arg);}
    arg();
}

doTask1("Hey11 How are1 u1");