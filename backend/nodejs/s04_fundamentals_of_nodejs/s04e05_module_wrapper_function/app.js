const a = 5;
console.log(a);
// a goes to the Local variable section

b = 4;
console.log(b);
// b goes to the Global variable section

function check() {
    c = 2;
}

check();

function checkAgain() {
    const aa = 8;
}

checkAgain();