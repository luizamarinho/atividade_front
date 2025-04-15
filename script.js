let valor_ref = document.querySelector(".valor");
let quantidade_ref = document.querySelector(".quantidade");
let resultado_ref = document.querySelector(".resultado");

function adicionar() {
  let valor = parseFloat(valor_ref.value);
  let quantidade = parseFloat(quantidade_ref.value);

  if (!isNaN(valor)) {
    let resultado = valor * quantidade;
    console.log(resultado);
    resultado_ref.innerHTML = "Total a pagar: R$" + resultado.toFixed(2);
    resultado_ref.classList.remove("sumir");
  }
}
