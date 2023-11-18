var nomeUsuario = prompt("Digite seu nome");
var valorEmDolar = prompt(
  "Ola, " + nomeUsuario + ", digite o valor em dolar para saber a valor em real"
);
var cotacaoEmDolar = 4.91;
var valorEmReal = valorEmDolar * cotacaoEmDolar;
valorEmReal = valorEmReal.toFixed(2);
alert(nomeUsuario + ", o valor em real é: R$ " + valorEmReal);
var cotacaoEmEuro = 5.36;
var valorEmEuro = prompt(
  nomeUsuario + ", agora digite o valor em Euro para saber a valor em real"
);
var valorEmReal = valorEmEuro * cotacaoEmEuro;
alert("A conversão de Euro para Real é: R$ " + valorEmReal);