// 10) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados. 

function clicar() {
    var a = document.querySelector(".a").value;
    var b = document.querySelector(".b").value;
    var NovaA = b 
    var NovaB = a
    document.querySelector(".NovaA").innerHTML = NovaA;
    document.querySelector(".NovaB").innerHTML = NovaB;
}