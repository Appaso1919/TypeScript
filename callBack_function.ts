//callback

function processData(input: number, callback: (result: number) => void) {
  const result = input * 2;
  callback(result);
}

processData(5, (output) => {
  console.log("Result:", output);
});



//callback with multiple parameters

function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}
let result = calculate(10, 5, (x, y) => x + y);
console.log(result); // 15
