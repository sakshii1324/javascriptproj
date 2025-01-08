// STACK : changes perform in copied data

let x = "sakshi"
let y = x
y = "manu"

console.log(x);
console.log(y);

//HEAP : changes perform in orignal data

let uOne = {
    email:"sdjhc",
    upi:"hbdchs"
}

let uTwo = uOne

uTwo.email = "kjdch"

console.log(uOne.email);
console.log(uTwo.email)