const answer = prompt("String malumot kriting")
console.log(typeof answer);

const num = +prompt("raqam malumot kriting")
console.log(typeof num);

const boolean = prompt("bool malumot kriting")
console.log(typeof Boolean(boolean));

alert(`
    ${answer} string malumotga kiradi
    ${num} raqam malumotga kiradi
    ${Boolean(boolean)} bool malumotga kiradi`);
