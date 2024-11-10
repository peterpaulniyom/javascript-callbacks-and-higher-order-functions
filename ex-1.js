// Exercise #1: For Each Function
let increaseFiveThousand = (num) => num + 5000;

function forEach(array, operation) {
  let result = [];
  for (let i in array){
    result.push(operation(array[i]));
  }
  return result;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here

newEmployeeSalaries = forEach(employeeSalaries,increaseFiveThousand);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
