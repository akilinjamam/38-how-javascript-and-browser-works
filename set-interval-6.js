console.log('first');
console.log('second');
// setInterval(() => console.log('tik tik tik'), 1000);

let second = 0;

const timeId = setInterval(() => {
    second++;
    console.log(second)
    if (second > 19) {
        clearInterval(timeId);
    }
}, 1000)