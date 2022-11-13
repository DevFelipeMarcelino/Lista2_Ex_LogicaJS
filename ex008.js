// 8) Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA=TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS=DISTÂNCIA/12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distância percorrida (DISTÂNCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem. 

function clicar() {
    var tempo = document.querySelector(".tempo").value;
    var VelocidadeMedia = document.querySelector(".VelocidadeMedia").value;
    var distancia = parseFloat(tempo) * parseFloat(VelocidadeMedia);
    var LitrosUsados = parseFloat(distancia) / parseFloat(12);
    var resultado = LitrosUsados.toFixed(2);
    document.querySelector(".resultado").innerHTML = resultado + " Lt";
    document.querySelector(".distancia").innerHTML = distancia + " Km";
}