//Basic Types
//*Primitive type (number, string, boolean)
//number
var num1 = 10;
var num2 = 10;
var num3 = 10;
var total = num1 + num3;
console.log(total);
//String
var UserName = "Appaso";
console.log("Name:", UserName);
//boolean
var isLoggedIn_ = true;
console.log("Is Logged In:", isLoggedIn_);
//*Array
var number1 = [1, 2, 3, 4];
console.log("Number:", number1);
//*Tuples
var person1 = ["Appaso", 24];
console.log("Person", person1);
//*Enums
var Directio2;
(function (Directio2) {
    Directio2[Directio2["Up"] = 0] = "Up";
    Directio2[Directio2["Down"] = 1] = "Down";
    Directio2[Directio2["Left"] = 2] = "Left";
    Directio2[Directio2["Right"] = 3] = "Right";
})(Directio2 || (Directio2 = {}));
var move1 = Directio2.Left;
console.log("Direction:", move1);
//*Any, Unknown, Void, Null, Undefined, Never
//Any
var data1 = 10;
data1 = "Hello";
data1 = true;
console.log("Data:", data1);
//Unknown
var a;
console.log(a);
var b = a;
console.log(b);
//Void
function Peron() {
    console.log("Hello!");
}
Peron();
//Null //Undefined
var nothing = null;
var notAssigned = undefined;
console.log("Null:", nothing);
console.log("Undefined:", notAssigned);
//Never
function throError(message) {
    throw new Error(message);
}
//union
var id;
id = 101;
id = "ABC123";
console.log("ID", id);
