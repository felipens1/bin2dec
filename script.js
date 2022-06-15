const botao = document.querySelector('#botao');

function bin2dec() {
  const numero = document.querySelector('#numero');
  const result = document.querySelector('#result');

  let bin = numero.value;
  let dec = 0;

  for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
    dec += bin[c] * Math.pow(2, i);
  }

  result.textContent = dec;
}

botao.addEventListener('click', bin2dec);