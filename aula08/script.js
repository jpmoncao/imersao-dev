var cartas = [
    (carta1 = {
        nome: "Capitão América",
        imagem: "https://br.web.img3.acsta.net/newsv7/21/05/17/16/51/0145959.jpg",
        atributos: {
            ataque: 8,
            defesa: 10,
            poder: 1,
            velocidade: 7,
            qi: 7,
            tecnologia: 2
        }
    }),
    (carta2 = {
        nome: "Homem de Ferro",
        imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0Ir3pA49-46xsNlkq1CyStdSl0pDzdsjvg&usqp=CAU",
        atributos: {
            ataque: 8,
            defesa: 7,
            poder: 1,
            velocidade: 5,
            qi: 9,
            tecnologia: 10
        }
    }),
    (carta3 = {
        nome: "Hulk",
        imagem:
            "https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Hulk-Vingadores.jpg",
        atributos: {
            ataque: 10,
            defesa: 6,
            poder: 7,
            velocidade: 4,
            qi: 2,
            tecnologia: 1
        }
    }),
    (carta4 = {
        nome: "Viúva Negra",
        imagem:
            "https://www.atrevida.com.br/wp-content/uploads/2021/07/tudo-o-que-voce-precisa-saber-sobre-natasha-romanoff-antes-da-estreia-de-viuva-negra.jpg",
        atributos: {
            ataque: 8,
            defesa: 7,
            poder: 1,
            velocidade: 6,
            qi: 6,
            tecnologia: 4
        }
    }),
    (carta5 = {
        nome: "Homem Aranha",
        imagem:
            "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/02/Homem-Aranha-Sem-Volta-Para-Casa.jpeg",
        atributos: {
            ataque: 7,
            defesa: 7,
            poder: 8,
            velocidade: 8,
            qi: 7,
            tecnologia: 9
        }
    }),
    (carta6 = {
        nome: "Stan Lee (Trunfo)",
        imagem:
            "https://olhardigital.com.br/wp-content/uploads/2021/05/Stan-Lee-scaled.jpg",
        atributos: {
            ataque: 10,
            defesa: 10,
            poder: 10,
            velocidade: 10,
            qi: 10,
            tecnologia: 10
        }
    })
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    while (numCartaMaquina === numCartaJogador) {
        var numCartaMaquina = parseInt(Math.random() * cartas.length);
        var numCartaJogador = parseInt(Math.random() * cartas.length);
    }

    cartaMaquina = cartas[numCartaMaquina];
    cartaJogador = cartas[numCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        divResultado.innerHTML = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        divResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>";
    } else {
        divResultado.innerHTML = "<p class='resultado-final'>Empate</p>";
    }

    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
