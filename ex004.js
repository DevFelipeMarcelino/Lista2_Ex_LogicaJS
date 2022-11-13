// 4) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. 

function clicar() {
    var CustoFabrica = document.querySelector(".CustoFabrica").value;
    var CustoDistribuidor = ((parseInt(28) / parseInt(100)) * parseInt(CustoFabrica));
    var impostos = ((parseInt(45) / parseInt(100)) * parseInt(CustoFabrica));
    PrecoFinal = parseInt(CustoFabrica) + parseInt(CustoDistribuidor) + parseInt(impostos);
    var resultado = PrecoFinal.toFixed(2);
    document.querySelector(".resultado").innerHTML = "O preço final do carro será de: R$" + resultado;
    document.querySelector(".CustoDistribuidor").innerHTML = "28% Sobre o custo de fábrica: R$" + CustoDistribuidor;
    document.querySelector(".impostos").innerHTML = "45% Sobre o custo de fábrica: R$" + impostos;
}