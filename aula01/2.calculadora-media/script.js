var nome = "João Pedro"

var nota1 = 9.312
var nota2 = 7
var nota3 = 4
var nota4 = 2
var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

console.log('Bem vindo ' + nome)

if (notaFinal < 5) {
    console.log(((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1))
    console.log('Você foi reprovado!')
}

else {
    console.log(notaFinal.toFixed(1))
    console.log('Você foi aprovado!') // Isso é um comentário ^^
}