// o estado da lâmpada: começa desligada
let ligada = false;

// os lugares da página que o JavaScript vai mexer
const botao = document.querySelector("#interruptor");
const lampada = document.querySelector("#lampada");
const aviso = document.querySelector("#aviso");

// clicou no botão? inverte o estado e mostra na página
botao.addEventListener("click", function () {
  ligada = !ligada;

  if (ligada) {
    lampada.textContent = "💡";
    aviso.textContent = "Luz acesa! A sua página está viva.";
    botao.textContent = "Desligar";
    document.body.classList.add("acesa");
  } else {
    lampada.textContent = "🌑";
    aviso.textContent = "Luz apagada. Clique para acender.";
    botao.textContent = "Ligar";
    document.body.classList.remove("acesa");
  }
});
