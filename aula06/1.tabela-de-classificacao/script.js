var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var guilherme = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
guilherme.pontos = calculaPontos(guilherme);

var jogadores = [rafa, paulo, guilherme];
exibeJogadores(jogadores);

function exibeJogadores(jogadores) {
    var elemento = "";

    for (var c = 0; c < jogadores.length; c++) {
        elemento += "<tr><td>"+jogadores[c].nome+"</td>";
        elemento += "<td>"+jogadores[c].vitorias+"</td>";
        elemento += "<td>"+jogadores[c].empates+"</td>";
        elemento += "<td>"+jogadores[c].derrotas+"</td>";
        elemento += "<td>"+jogadores[c].pontos+"</td>";
        elemento += "<td><button onClick='adicionarVitoria("+c+")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate("+c+")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+c+")'>Derrota</button></td></tr>";
    }

    document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(c) {
    var jogador = jogadores[c]
    jogador.vitorias ++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadores(jogadores)
}

function adicionarEmpate(c) {
    var jogador = jogadores[c]
    jogador.empates ++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadores(jogadores)
}

function adicionarDerrota(c) {
    var jogador = jogadores[c]
    jogador.derrotas ++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadores(jogadores)
}
