const qtdNumeros = parseFloat(prompt ("Quantos números deseja inserir?"));
const numeros = [];
let soma = 0;
let media = 0;

for ( i = 0; i < qtdNumeros; i++) {
    let numero = parseFloat(prompt("Digite o " +(i+1)+ "º número"));
    numeros.push(numero);
}

for (i = 0; i < qtdNumeros; i++) {
    soma = soma + numeros[i];
}

media = soma / qtdNumeros

novoArray = numeros.map(x => { //map sempre reotorna um array c a mesma quantd de valor
    return x  ** 2 
})

novooArray = numeros.map(x => {
    return Math.sqrt(x)

})

novoooArray = numeros.map(x => {
    return Math.cbrt(x)

})

alert ('A soma desses números é igual a : ' + soma)
alert ('A média desses números é igual a : ' + media)
alert ('Elevados ao quadrado : ' + novoArray)
alert ('Raiz quadrada de cada um deles respectivamente é igual : ' + novooArray)
alert ('Raiz cúbica de cada um deles respectivamente é igual : ' + novoooArray)