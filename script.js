// Pegando valores da pagina ao clicar no botão
function adicionarNota() {
  var notaPrimeiroBimestre = parseFloat(document.getElementById("primeiroBimestre").value);
  var notaSegundoBimestre = parseFloat(document.getElementById("segundoBimestre").value);
  var notaTerceiroBimestre = parseFloat(document.getElementById("terceiroBimestre").value);
  var notaQuartoBimestre = parseFloat(document.getElementById("quartoBimestre").value);

  // Realiza calculo da média
  var notaMedia = ((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(2);

  // Comando logico para salvar uma variavel informando o resultado se passou ou não
  // Se a nota média for maior que 7 o aluno é aprovado, senão reprovado
  if (notaMedia >= 7) {
    var resultado = "Parabéns!!! Você foi aprovado";
  } else {
    var resultado =
      "Não foi dessa vez, suas notas não atingiram a meta esperada";
  }

  // Imprimindo no HTML o resultado
  var resultadoFinal = document.getElementById("aprovadoReprovado");
  var aprovadoReprovado = resultado;
  resultadoFinal.innerHTML =
    "Sua média anual foi de " + notaMedia + "<br>" + aprovadoReprovado;
}

// Revisão
// Variáveis: espaços na memória do computador que utilizamos para armazenar e referênciar dados.
// Strings: são palavras e textos que colocamos no código usando aspas
// console.log(): usamos para imprimir no console
// toFixed: para ajustar as casas decimais, numeros "quebrados", dizimas periodicas.
// Contatenação: juntar uma String com uma variavel, ex: console.log("Bem vindo " + nome)

