// 3) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function clicar() {
    var SalarioAtual = document.querySelector(".SalarioAtual").value;
    var Persentual = document.querySelector(".Persentual").value;
    var NovoSalario = parseInt(SalarioAtual) + ((parseInt(Persentual) / parseInt(100)) * parseInt(SalarioAtual));
    var resultado = NovoSalario.toFixed(2);
    document.querySelector(".resultado").innerHTML = "Seu novo salário será de: R$ "+resultado;
}