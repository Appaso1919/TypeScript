//callback
function processData(input, callback) {
    var result = input * 2;
    callback(result);
}
processData(5, function (output) {
    console.log("Result:", output);
});
//callback with multiple parameters
function calculate(a, b, operation) {
    return operation(a, b);
}
var result = calculate(10, 5, function (x, y) { return x + y; });
console.log(result); // 15
