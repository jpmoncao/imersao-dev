var cartas = [
    (carta1 = {
      nome: "Capitão América",
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
      nome: "One Above All (Trunfo)",
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
console.log(cartaJogador);

document.getElementById("btnSortear").disabled = "true";
document.getElementById("btnJogar").disabled = "false";
exibirOpcoes()
}
  
  
function exibirOpcoes() {
var opcoes = document.getElementById("opcoes");
for (var c in cartaJogador.atributos) {
    opcoes.innerHTML += "<input type='radio' name='atributo' value='"+c+"'>"+c
}
}
  