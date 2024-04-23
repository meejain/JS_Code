function getfights() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('here are the fights...');
        }, 2000);
    })
}

function gethotels() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('here are the hotels...');
        }, 9000);
    })
}

console.time('travel');
Promise.all([getfights(), gethotels()]).then((values) => {
    console.timeEnd('travel');
    console.log(values[0]);
    console.log(values[1]); 
}, (error) => {
    console.log("no data found");
});


