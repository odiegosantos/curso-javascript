var filmes = [];

function adicionarFilmes() {
  var inNome = document.getElementById("inNome");
  var inDecada = document.getElementById("inDecada");

  var nome = inNome.value;
  var ano = Number(inDecada.value);

  if (nome === "" || inDecada.value === "" || isNaN(ano)) {
    alert("Informe os dados corretamente");
    inNome.focus();
    return;
  }

  filmes.push({
    nome: nome,
    ano: ano
  });

  inNome.value = "";
  inDecada.value = "";
  inNome.value = "";

  listarfilmes();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilmes);

function listarfilmes() {
  if (filmes.length == 0) {
    alert("Não há filmes na lista");
    return;
  }

  var lista = "";

  for (var i = 0; i < filmes.length; i++) {
    lista += `${filmes[i].nome} - ${filmes[i].ano}'s \n`;
  }
  outLista.textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarfilmes);

function resumirLista() {
  if (filmes.length == 0) {
    alert("Não há filmes na lista");
    return;
  }
  var copia = filmes.slice();
  copia.sort(function (a, b) { return a.ano - b.ano });

  var resumo = "";

  var aux = copia[0].ano;
  var nomes = [];

  for (var i = 0; i < copia.length; i++) {
    if (copia[i].ano == aux) {
      nomes.push(copia[i].nome);
    } else {
      resumo += aux + "ano(s): " + nomes.length + " filmes(s) - ";
      resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = copia[i].ano;
      nomes = [];
      nomes.push(copia[i].nome);
    }
  }

  resumo += aux + " ano(s): " + nomes.length + " filmes(s) - ";
  resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";

  outLista.textContent = resumo;
}
var btResumir = document.getElementById("btOrganizar");
btResumir.addEventListener("click", resumirLista);