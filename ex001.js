function clicar() {
    var anos= document.querySelector(".anos").value;
    var meses= document.querySelector(".meses").value;
    var dias= document.querySelector(".dias").value;
    var idade= (parseInt(anos) * parseInt(365)) + (parseInt(meses) * parseInt(30)) + parseInt(dias) ;
    document.querySelector(".idade").innerHTML = idade;
    }