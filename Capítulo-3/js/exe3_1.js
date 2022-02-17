function calcularMedia() {
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outSituacao = document.getElementById("outSituacao");

  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  var media = (nota1 + nota2) / 2;

  var textoMedia = `Média das Notas:`;
  var aprovado = `Parabéns! ${nome} Você foi Aprovado(a).`;
  var exame = `Atenção ${nome}! Você está de Exame!`;
  var reprovado = `Ops ${nome}...Você foi reprovado(a)!!!`;


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
  document.getElementById('outMedia')
    .textContent = `${textoMedia} ${media.toFixed(2)}`;
}
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);