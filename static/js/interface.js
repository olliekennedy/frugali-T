const input = document.querySelector('input');
const log = document.getElementById('net-output');
const totalOutgoings = document.getElementById('groceries-input');
// console.log(totalOutgoings)
// input.addEventListener('input', updateValue);
let inputs = document.querySelectorAll("input");
inputs.forEach(function(elem) {
    elem.addEventListener("input",updateValue);
});
function updateValue(e) {
  if (totalOutgoings.value == NaN ) {
    log.textContent = `£${parseInt(document.getElementById("income-input").value)}`;
  } else {
    log.textContent = `£${parseInt(document.getElementById("income-input").value)- parseInt(totalOutgoings.value)}`;
  }
}
