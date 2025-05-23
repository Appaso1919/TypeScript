// Type Inference
function add(a, b) {
    return a + b;
}
console.log(add(4, 6));
var m;
m = 12;
m = true;
m = "appaso";
console.log(m);
//Array inference
var colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);
//object inference
var user = {
    id: 1,
    username: "john_doe"
};
console.log(user.username.toUpperCase());
