var nos:number[] = [3,43,21,23];

let i:number;
for(i=0;i<nos.length; i++){
    console.log(nos[i]);
}

for(i=0;i<nos.length; i++){
 alert(nos[i]);
}

for(i=0;i<nos.length; i++){
    document.write(nos[i]);
}

function forEach(elems, action): void{
    let i: number;
    for(i=0;i<elems.length;i++){
        action(elems[i]);
    }
}

forEach(nos, console.log);
forEach(nos, alert);
forEach(nos, document.write);
