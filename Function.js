//parameter Type
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Appaso");
//return type
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
//Default Parameters
function welcome(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Welcome, ".concat(name, "!"));
}
welcome();
welcome("Appaso");
//optional parameters
function log(message, userId) {
    if (userId) {
        console.log("[User ".concat(userId, "]: ").concat(message));
    }
    else {
        console.log(message);
    }
}
log("System started");
log("User logged in", 101);
