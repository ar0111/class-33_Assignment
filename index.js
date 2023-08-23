// let a = 20;
// console.log(typeof a);

// let b = "Arafat Rahman";
// console.log(typeof b);

// let c = "hello";
// let d = c;
// console.log(c, d);

// d = "Gello";
// console.log(c, d);

// let x = {
//     job: "Web Developer"
// };

// let y = x;

// console.log(x, y);

// y.job = "Android Developer";
// console.log(x, y);

// let x1 = true;

// if(x1){
//     console.log(x1, "This is Truthy");
// }else{
//     console.log(x1, "This is falsy");
// }

// let first;
// console.log(first);

// function second(x, y){
//     const sum = x + y;
//     return sum;
// }

// const result = second(12, 13);
// console.log(result);

// function add(a, b){
//     const sum = a + b;
//     if(b < 10){
//         return sum;
//     }

//     const fun = a * b;
//     return fun;
// }

// const fourth = add(7, 5);
// console.log(fourth);

// function double(a, b){
//     const result = a * 2;
//     console.log(b);
//     return result;
// }

// double(1);

const fifth = {name: "sohorab", age: 42, location: 'Dhaka'};

// console.log(fifth.phone);

const six = [45, 56, 78, 90];
// console.log(six[5]);

const myObject = {
    name: "Arafat Rahman",
    isJobHolder: null
}

// console.log(myObject.isJobHolder);

// const first = 3;
// const second = "3";

// if(first === second){
//     console.log("condition is True");
// }else{
//     console.log("Condition is not true");
// }

// const a = {name: "arafat"};
// const b = {name: "arafat"};

// console.log(JSON.stringify(a) == JSON.stringify(b));

// const favNum = 70;
// function add(first, section){
//     const result = first + second;
//     return result;
// }

// const sum = add(10, 20);
// console.log(sum);

// function add(first, second){
//         const result = first + second;
//         if(result > 9){
//             var mood = "Happy";
//         }
//         console.log(mood);
//         return result;
// }

// const sum = add(10, 20);
// console.log(sum);
// console.log(mood);

// function stopWatch(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }

// let clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

function welcomeMessage(name, greetHandler){
    // console.log(name);
    greetHandler(name);
}

function greetMorning(name){
    console.log("Good Morning", name);
}

function greetEvening(name){
    console.log("Good Morning", name);
}

welcomeMessage("Sakib", greetMorning);
welcomeMessage("Sakib", greetEvening);