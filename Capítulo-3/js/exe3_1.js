function calcularMedia() {
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");

  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  var media = (nota1 + nota2) / 2;

  var aprovado = `Parabéns! ${nome} Você foi Aprovado(a).`;
  var exame = `Atenção ${nome}! Você está de Exame!`;
  var reprovado = `${nome} Você foi reprovado(a)!!!`;
  var outMedia = `Média das Notas: ${media.toFixed(2)}`;

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
  outMedia.textContent = `${outMedia}`;
}
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);