var obj ={collge:"bishopcotton"};

function print(age,profession){
    return "my coolge"+this.collge + age +profession;
}
// console.log(print.apply(obj,[6,"sde"]));//apply
// console.log(print.call(obj,6,"sde"));//call

//bind

const anotherfunction =print(obj);
console.log(print.call(6,"sde"));
console.log(print.call(8,"tech"));