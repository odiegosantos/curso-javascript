function categoriaAtleta() {
  var atleta = document.getElementById("inAtleta").value;
  var idade = document.getElementById("inIdade").value;

  if (atleta === "" || idade === 0 || isNaN(idade)) {
    alert("Informe os dados Corretamente");
    return;
  }

  var sublinhado = gerarTracos(atleta);
  var categoria = verCategoria(idade);
  var saida = `${atleta} 
  ${sublinhado} 
  Categoria: ${categoria}
  `;

  document.getElementById("outSaida").textContent = `${saida}`;
}
var btCategoria = document.getElementById("btCategoria");
btCategoria.addEventListener("click", categoriaAtleta);

function gerarTracos(nome) {
  var tam = nome.length;
  var tracos = "";
  for (var i = 0; i < tam; i++) {
    if (nome.charAt(i) != " ") {
      tracos += "-";
      tracos += " ";
    } else {
    }
  }
  return tracos;
}
function verCategoria(idade) {
  var categoriaIdade;
  if (idade <= 12) {
    categoriaIdade = "Infantil - Piscina 0.5 Metro";
  } else if (idade <= 18) {
    categoriaIdade = "Juvenil - Piscina 2 Metros";
  } else {
    categoriaIdade = "Adulto - Piscina 4 Metros"
  }
  return categoriaIdade;
}