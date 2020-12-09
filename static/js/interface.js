const input = document.querySelectorAll('input');
input.forEach(el => {
  el.addEventListener('input', updateValue);
})

const income = document.getElementById('income-input')
const net = document.getElementById('net-output');
const outG = document.getElementById('outgoings-output');
function updateValue(e) {
  updateOutgoing()
  net.textContent = `£${+income.value - +outG.textContent.substring(1)}`;
};

const allOutgoings = document.querySelector('#outgoings').querySelectorAll('input')
function updateOutgoing() {
  allOutgoingsArray = Array.from(allOutgoings)
  values = allOutgoingsArray.map ( elem => parseInt(elem.value) || 0 )
  var sum = values.reduce((a, b) => a + b, 0)
  outG.textContent = `£${sum}`;
};

var myArray = [
  "Tea is the second most consumed beverage on the planet ",
  "Tea is good for you ",
  "Tea was once considered dangerous"
];
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
document.getElementById("random").innerHTML = randomItem;

console.log(randomItem);


updateValue()
