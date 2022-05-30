let lado1 = parseFloat(prompt ('Informe a medida do 1º lado do triangulo'))
let lado2 = parseFloat(prompt ('Informe a medida do 2º lado do triangulo'))
let lado3 = parseFloat(prompt ('Informe a medida do 3ª lado do triangulo'))


if (lado1 === lado2 && lado2 === lado3){
    alert ('Esse triangulo é equilatero, pois tem todos os lados iguais')
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    alert ('Esse triangulo é escaleno, pois tem todos os lados diferentes')
} else {
    alert ('Esse triangulo é isoceles, pois tem apenas dois lados iguais')
}