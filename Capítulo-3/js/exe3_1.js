function calcularMedia() {
  var nome = document.getElementById.value;
  var nota1 = document.getElementById("inNota1").value;
  var nota2 = document.getElementById("inNota2").value;

  var media = (nota1 + nota2) / 2;

  var aprovado = `Parabéns! ${nome} Você foi Aprovado(a).`;
  var exame = `Atenção ${nome}! Você está de Exame!`;
  var reprovado = `${nome} Você foi reprovado(a)!!!`;

  if (media >= 7) {
    outSituacao.textContent = `${aprovado}`;
    outSituacao.style.color = "blue";
  } else if (media >= 4) {
    outSituacao.textContent = `${exame}`;
    outSituacao.style.color = "green";
  } else {
    outSituacao.textContent = `${reprovado}`;
    outSituacao.style.color = "red";
  }
}
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);