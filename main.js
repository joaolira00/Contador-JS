function iniciar(params) {
  var inicio;
  var fim;
  var marcar;
  var resultados = document.getElementById("resultados");

  inicio = document.getElementById("iniciar").value;

  fim = document.getElementById("fim").value;

  marcar = document.getElementById("marcar").value;

  if (inicio.length == 0 || fim.length == 0 || marcar.length == 0) {
    alert("ERRO: Insira os dados corretamente!");
  } else {
    resultados.innerHTML = "Analisando seus dados: ";
    var i = Number(inicio);
    var f = Number(fim);
    var m = Number(marcar);
  }
  if (i < f) {
    for (let contar = i; contar <= f; contar += m) {
      resultados.innerHTML += `${contar} \u{1F449}`;
    }
  } else {
    for (let contar = i; contar >= f; contar -= m) {
      resultados.innerHTML += `${contar} \u{1F448}`;
    }
  }
  resultados.innerHTML += `\u{26D4}`;
}
