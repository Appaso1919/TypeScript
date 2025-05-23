//Basic Types
//*Primitive type (number, string, boolean)

//number
var num1:number=10;
var num2:number=10;
var num3:number=10;

var total:number=num1+num3;
console.log(total); 

//String
let UserName: string = "Appaso";
console.log("Name:", UserName);

//boolean
let isLoggedIn_: boolean = true;
console.log("Is Logged In:", isLoggedIn_);

//*Array
let number1: number[] = [1, 2, 3, 4];
console.log("Number:", number1);

//*Tuples
let person1: [string, number] = ["Appaso", 24];
console.log("Person", person1);

//*Enums
enum Directio2 {
  Up,
  Down,
  Left,
  Right
}
let move1: Directio2 = Directio2.Left;
console.log("Direction:", move1);


//*Any, Unknown, Void, Null, Undefined, Never

//Any
let data1: any = 10;
data1 = "Hello";
data1 = true;
console.log("Data:", data1);

//Unknown
let a: unknown;
console.log(a);
let b: unknown=a;
console.log(b);

//Void
function Peron(): void {
  console.log("Hello!");
}
Peron();

//Null //Undefined
let nothing: null = null;
let notAssigned: undefined = undefined;

console.log("Null:", nothing);
console.log("Undefined:", notAssigned);

//Never
function throError(message: string): never {
  throw new Error(message);
}


//union
let id: number | string;
id=101;
id="ABC123";
console.log("ID",id);

