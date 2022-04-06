// how javascript run?
// javascript runs maintaining sequence one after one. this is in general case.but setTimeout and setInterval is not a normal case . when code runs one afer one and trace setTimeout and setInternal. then js execute it at the last time of running codes. if you want , you can set time to execute that code. 

// normal code runs in a synchronised way but setTimeout and setInterval runs in asynchronised way.


function doSomething() {
    console.log('i am conding in javascript')
}


console.log('first: ami sobar age');
console.log('second: ami second position e achi');
// setTimeout(doSomething, 5000);
setTimeout(function () {
    console.log('i am conding')
}, 5000);
setTimeout(() => {
    console.log('i am running vs code');
}, 4000)
console.log('Third: ami tin number baccha');
console.log('Fourth: ami ek hali purno korsi')