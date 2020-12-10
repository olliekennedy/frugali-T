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
  updateColor()
};

const allOutgoings = document.querySelector('#outgoings').querySelectorAll('input')
function updateOutgoing() {
  allOutgoingsArray = Array.from(allOutgoings)
  values = allOutgoingsArray.map ( elem => parseInt(elem.value) || 0 )
  var sum = values.reduce((a, b) => a + b, 0)
  outG.textContent = `£${sum}`;
};

var facts = [
  "Tea is the second most consumed beverage on the planet ",
  "Tea is good for you ",
  "Tea was once considered dangerous"
];
var randomFact = facts[Math.floor(Math.random()*facts.length)];
document.getElementById("random-fact").innerHTML = randomFact;

var tips = [
  "Enter your income first",
  "Teabag, water, milk. End of conversation.",
  "A strong brew is a good brew",
  "Change your budgets if your net is below 0"
];
var randomTip = tips[Math.floor(Math.random()*tips.length)];
document.getElementById("random-tip").innerHTML = randomTip;

const netWarning = 20
const netDanger = 0
var body = document.querySelector("body")
function updateColor() {
  value = +net.textContent.substring(1)
  body = document.querySelector("body")
  if (value > netWarning) {
    setGreen()
  } else if (value > netDanger) {
    setOrange()
  } else {
    setRed()
  }
}

function setGreen() {
  net.style.color = "rgb(0, 0, 0)"
  body.style.backgroundColor = 'rgb(218, 240, 220)'
}

function setOrange() {
  net.style.color = "rgb(255, 165, 0)"
  body.style.backgroundColor = 'rgb(237, 225, 202)'
}

function setRed() {
  net.style.color = "rgb(255, 0, 0)"
  body.style.backgroundColor = 'rgb(232, 202, 202)'
}

updateValue()
