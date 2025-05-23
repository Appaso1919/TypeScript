//parameter Type
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
greet("Appaso");

//return type
function add(a: number, b: number): number {
    return a + b;
}
let result = add(5, 3);

//Default Parameters
function welcome(name: string = "Guest"): void {
    console.log(`Welcome, ${name}!`);
}
welcome();
welcome("Appaso");

//optional parameters
function log(message: string, userId?: number): void {
    if (userId) {
        console.log(`[User ${userId}]: ${message}`);
    } else {
        console.log(message);
    }
}
log("System started");
log("User logged in", 101);
