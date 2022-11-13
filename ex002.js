function clicar() {
    var Votos = document.querySelector(".Votos").value;
    var Brancos = document.querySelector(".Brancos").value;
    var Nulos = document.querySelector(".Nulos").value;
    var VotosValidos = parseFloat(Votos) - (parseFloat(Brancos) + parseFloat(Nulos));
    var PorcentagemValidos = (parseFloat(VotosValidos) / parseFloat(Votos)) * parseFloat(100);
    var PorcentagemBrancos = (parseFloat(Brancos) / parseFloat(Votos)) * parseFloat(100);
    var PorcentagemNulos = (parseFloat(Nulos) / parseFloat(Votos)) * parseFloat(100);
    document.querySelector(".PorcentagemBrancos").innerHTML = PorcentagemBrancos + "%";
    document.querySelector(".PorcentagemNulos").innerHTML = PorcentagemNulos + "%";
    document.querySelector(".PorcentagemValidos").innerHTML = PorcentagemValidos + "%";

}