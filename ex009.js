// 9) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO=VALOR+(VALOR*TAXA/100) *TEMPO). 

function clicar() {
    var tempo = document.querySelector(".tempo").value;
    var ValorInicial = document.querySelector(".ValorInicial").value;
    var taxa = document.querySelector(".taxa").value;
    var prestacao = parseFloat(ValorInicial) + (parseFloat(ValorInicial) * parseFloat(taxa) / parseFloat(100)) * parseFloat(tempo);
    var resultado = prestacao.toFixed(2);
    document.querySelector(".resultado").innerHTML = "R$ "+resultado;
}