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
  values = allOutgoingsArray.map ( x => parseInt(x.value) || 0 )
  var sum = values.reduce((a, b) => a + b, 0)
  outG.textContent = `£${sum}`;
};

updateValue()
