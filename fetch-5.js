// fetch is an Asynchronoused as like as await. this means it doesnt maintain one after one activities. fetch calls the api, take data, it takes little bit more time. thats why js skip runnig fetch till data comes from api. on that time other code runs maintaining serial .
console.log(11111);
console.log(22222);
console.log(33333);
console.log(44444);
setTimeout(() => {
    console.log('aaaaaa')
}, 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

for (let i = 0; i <= 10000; i++) {
    console.log(i);
};