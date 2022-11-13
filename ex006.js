//6) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C=(F-32) *(5/9), sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

function clicar() {
    var fahrenheit = document.querySelector(".fahrenheit").value;
    var celsius = (parseFloat(fahrenheit) - parseFloat(32)) * (parseFloat(5) / parseFloat(9));
    var resultado = celsius.toFixed(1);
    document.querySelector(".resultado").innerHTML = resultado + "°c";
}