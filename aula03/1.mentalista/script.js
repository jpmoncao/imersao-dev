var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    var descricao = document.getElementById("descricao");

    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou!";
        descricao.innerHTML = "Reinicie e tente novamente.";
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "tente um número entre 0 e 10...";
    } else {
        resultado.innerHTML = "Você errou, tente novamente.";
    }
}
