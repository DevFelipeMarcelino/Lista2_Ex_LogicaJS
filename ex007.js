// 7) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = π*Raio2*Altura 

function clicar() {
    var altura = document.querySelector(".altura").value;
    var raio = document.querySelector(".raio").value;
    var volume = Math.PI * (parseFloat(raio) * parseFloat(raio)) * parseFloat(altura);
    var resultado = volume.toFixed(1);
    document.querySelector(".resultado").innerHTML = resultado + " Lt";
}