// 5) Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

function clicar() {
    var celsius = document.querySelector(".celsius").value;
    var fahrenheit = (parseFloat(9) * parseFloat(celsius) + parseFloat(160)) / parseFloat(5);
    var resultado = fahrenheit.toFixed(1);
    document.querySelector(".resultado").innerHTML = resultado + "°f";
}