function mostrarOla() {
  var nome = document.getElementById("nome").value;

  var resposta = ` Olá ${nome}`;
  document.getElementById("resposta").textContent = `${resposta}`;
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);
