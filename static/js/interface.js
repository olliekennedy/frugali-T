// const input = document.querySelector('input');
// const log = document.getElementById('net-output');
// const totalOutgoings = document.getElementById('groceries-input');
// console.log(totalOutgoings);
// // input.addEventListener('input', updateValue);
// let inputs = document.querySelectorAll("input");
// inputs.forEach(function(elem) {
//     elem.addEventListener("input", updateValue);
// });
// function updateValue(e) {
//     log.textContent = `£${e.target.value}`;
// }
const input = document.querySelector('input');
const outgoings = document.querySelector("#outgoings")
const log = document.getElementById('net-output');
const outG = document.getElementById('outgoings-output');

input.addEventListener('input', updateValue);
function updateValue(e) {
  log.textContent = `£${e.target.value}`;
  // console.log(checking());
};

outgoings.addEventListener('input', updateOutgoing);
function updateOutgoing(e) {
  outG.textContent = `£${e.target.value}`;
};

// function outgoingValue(){
//   const sum = bills.value;
//   document.getElementById("outgoings-output").textContent = `£${sum}`;
// };

// const bills = document.getElementById('bills-input');
// const groceries = document.getElementById('groceries-input');
// const travel = document.getElementById('travel-input');
// const loans = document.getElementById('loans-input');
// const hobbies = document.getElementById('hobbies-input');
// const tea = document.getElementById('tea-input');
// const savings = document.getElementById('savings-input');
// const entertainment = document.getElementById('entertainment-input');



