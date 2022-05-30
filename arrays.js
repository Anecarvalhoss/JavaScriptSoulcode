// const array = new Array

/*const array = [1, 2, 3, 4, 5, 10, 75.6, 100, 80]
const nomes = ['Amanda', 'Andre', 'Andrea', 'Antonio']
const arrBidimensional = [
    [1, 2, 3, 4, 5],
    [1, 5, 4, 7, 8, 10]
    [1, 3, 4, 5, 7, 10]
]

console.log(array[0]) // 1
console.log(array[3]) // 4
console.log(array[6]) // 75.6

console.log(nomes[1], nomes[0])
console.log(nomes[2]) */


//MEDIA USANDO ARRAY//
const qtdNotas = parseInt(prompt('Quantas notas devem ser recebidas?'))
const notas = []

for (let i = 0; i < qtdNotas; i++) {
  notas[i] = parseFloat(prompt(`Digite a ${i + 1}° nota`))
}

let soma = 0

for (let i = 0; i < notas.length; i++) {
  soma += notas[i]
}

const media = soma / notas.length

alert(`Sua média foi ${media.toFixed(2)}`)


