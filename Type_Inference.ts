// Type Inference

function add(a:number, b:number){
    return a+b;
}
console.log(add(4,6));

let m: number | boolean | string
m=12;
m= true;
m="appaso"
console.log(m);

//Array inference
let colors = ["red", "green", "blue"]; 
colors.push("yellow");
console.log(colors);

//object inference
let user = {
  id: 1,
  username: "john_doe"
};
console.log(user.username.toUpperCase());
