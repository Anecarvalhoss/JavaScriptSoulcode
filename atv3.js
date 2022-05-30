let n1 = parseInt(prompt("Qual é o 1º numero?"))
let n2 = parseInt(prompt("Qual é o 2º numero?"))

let temp = 0
temp = n1
n1 = n2
n2 = temp

alert(`O primeiro numero é` + n1 + ` e o segundo é` + n2)