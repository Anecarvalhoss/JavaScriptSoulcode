documento.write(`<$${elemento}>${txt}</${elemento }>`)


função  somar ( a ,  b )  {
  retornar  a  +  b
}

função  subtrair ( a ,  b )  {
  se (b>a){
    retornar  b  -  a
  }  senão  {
    retornar  a  -b
  }
}

função  imc ( peso ,  altura )  {
  return  parseFloat (( peso  /  (altura ** 2 )).toFixed ( 2) )
}

deixe  total  =  somar (20 ,  32)
// deixa total = somar(20, 32)

consola.log (`total = ${ total }`)
// console.log(`total = ${total}`)

total  =  subtrair (20 ,  10)
// total = subtrair(20, 10)

consola.log (`total = ${ total } `)
// console.log(`total = ${total}`)

consola.log ( imc ( 75 ,  1.7 ) )

consola.log ( subtrair ( 2 ,  5 ) )
deixe  sub  =  ( a ,  b )  =>  {
  se  ( b  >  a )  {
    retornar  b  -  a
  }  senão  {
    retornar  a  -  b
  }
}
seja  somar  =  ( a ,  b )  =>  a  +  b
const  f  =  ( )  =>  5
const  dobro  =  x  =>  x  *  2

const  resultado  =  sub ( 5 ,  6 )
const  r  =  somar ( 5 ,  8 )

/**
* Δ = b ^ 2 - 4 * a * c
* bhaskara = -b +- √Δ / 2 * a
*/ 
consola.log ( resultado )
consola.registro ( r )
consola.log ( dobro ( 20 ) ) 