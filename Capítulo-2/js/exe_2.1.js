function mostrarOla() {
  var nome = document.getElementById("nome").value;

  var saudacao = ` Olá ${nome}`;
  document.getElementById("saudacao")
    .textContent = `${saudacao}`;
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);
