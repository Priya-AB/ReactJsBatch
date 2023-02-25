// DataTypes: Primitive
// String
// Number
// null
// Boolean
// undefined

// DataTypes: Reference
// Array
// Object
// Function

let name="Priya";
let age = 21;
let nul = null;
let a = false;
let b;

console.log("Name is", name);
console.log("Age is", age);
console.log("data is", nul);
console.log("value of a is",a);
console.log("value of b is",b);
console.log(typeof name);
console.log(typeof age);
console.log(typeof nul);
console.log(typeof a);
console.log(typeof b);

//Reference data type
let arr =[1,2,3,"abc",true]
console.log(typeof arr);

let obj ={
    name: "sai",
    age: 34,
    weight: 60,
}
console.log(obj.weight);
console.log(typeof obj);

function user(){
    console.log(1+2)
}

console.log(typeof user)

let date=new Date()
console.log(typeof date)
console.log(date)
