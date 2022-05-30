/*let nota1 = parseFloat(prompt ('Informe a 1ª nota'))
let nota2 = parseFloat(prompt ('Informe a 2ª nota'))
let nota3 = parseFloat(prompt ('Informe a 3ª nota'))
//let qtdFaltas = parseInt(prompt('Informe sua quantidade de faltas'))

const media = (nota1 + nota2 + nota3) / 3

alert ('Sua media é: ' + media)

if (media > 7 && qtdFaltas <= 3){
    alert ('PARABENS! Passou acima da media')
} else if (media === 7 || qtdFaltas <= 3){
    alert ('QUASE NÃO PASSOU, HEIN')
} else {
    alert ('Sinto muito, voce não passou')
}
*/



/*let nota1 = parseFloat(prompt ('Informe a 1ª nota'))
let nota2 = parseFloat(prompt ('Informe a 2ª nota'))
let nota3 = parseFloat(prompt ('Informe a 3ª nota'))
//let qtdFaltas = parseInt(prompt('Informe sua quantidade de faltas'))

const media = (nota1 + nota2 + nota3) / 3
const alunoPassou = media > 7 //false

alert('Sua media é: ' + media)

if (!alunoPassou) {
    alert('Sinto muito, voce não passou')
} else {
    alert('PARABENS! Passou acima da media')
}
*/

//const qtdNotas= parseInt(prompt('Quantas notas devem ser recebidas?'))

//let i = 0 //variavel contadora
//let soma = 0

//while (i < qtdNotas) /* condição booleana*/ {
    //const notas = parseFloat(prompt('Informe a nota'))

    //soma = soma + notas

    //i++
//}

/*for (let i = 0; i < qtdNotas; i++){
    const nota = parseFloat(prompt(`Digite a ${i + 1}° nota`))

    soma += nota // soma = soma + soma
}

const media = soma / qtdNotas

alert('Sua media é ' + media)*/

/*//TABUADA DE 1000//

document.write('<h1>Tabuada</h1>')
const numero = parseInt(prompt('Qual tabuada voce deseja?'))

for (let i = 0; i <= 1000; i++) {

    document.write (i + '*' + numero + '=' + (i * numero));
    document.write('<br/>')
}
*/

let number = NaN

while(isNaN(number) || number == 0){
    number = parseFloat(prompt('Digite o numero da tabuada'))
}

for (let i = 1; i <= 1000; i++) {
    document.write(`<p>${number} x ${number * i}</p>`)
}

