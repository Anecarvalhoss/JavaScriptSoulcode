//Criar uma função que retorna o valor da equaçao do segundo grau
// delta = b^2-4*c
//baskara = -b +- raiz de delta / 2 * 2 * a */

/*function função (a, b, c){
    return parseFloat ((b^2) - (4*a*c))
}

total = função (1, -1, -12)
console.log(`total = ${total}`) */

//-----------------------------------------------------------------//

// ax2 + bx + c = 0*/

function eqSegundoGrau(a, b, c) {
    //delta = b2 - 4ac*/

    const delta = (b**2) - 4 * a * c
    // ba= -b +- raiz de delta /2 a */

    const raizDelta = Math.sqrt(delta)

    const x1 = (-b + raizDelta) / 2 * a
    const x2 = (-b - raizDelta) / 2 * a

   // return [x1, x2] */  //(retornando com o array)*/

   return{
       x1: x1,
       x2: x2
   }
}

console.log(eqSegundoGrau(1, -1, -12))



