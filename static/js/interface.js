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
  var maximum = income.value
  balance = income.value -outG.textContent.substring(1)
  bar.animate(  balance / maximum );
  updateColor()
const progressbar = document.getElementById('progressbar');
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
}

function setOrange() {
  net.style.color = "rgb(255, 165, 0)"
}

function setRed() {
  net.style.color = "rgb(255, 0, 0)"
}

var bar = new ProgressBar.SemiCircle('#ProgressBar', {
  easing: 'easeInOut',
  strokeWidth: 6,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#ff0000'},
  to: {color:'#009900'},
  // Set default step function for all animate calls
  step: (state, bar) => {

    bar.path.setAttribute('stroke', state.color);
    //var.path.setAttribute('stroke',state.color)
    var value = Math.round(bar.value() );
    // if (value === 0) {
    //   bar.setText('');
    // } else {
    //   bar.setText(value);
    // }
    //
    // bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

const getOut = document.getElementById('sign-out').onclick = function () {
  location.href = './logout'
};

updateValue()
