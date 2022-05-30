    const numero1 = parseInt(prompt("Qual é o seu 1º numero?"))
    const numero2 = parseInt(prompt("Qual é o seu 2º numero?"))
    const numero3 = parseInt(prompt("Qual é o seu 3º numero?"))

    if (numero1 > numero2 && numero1 > numero3){
        document.write("O maior numero é" + numero1)
    }
    else if(numero2 > numero1 && numero2 > numero3){
        document.write("O maior numero é" + numero2)
    }
    else{
        document.write("O maior numero é" + numero3)
    }




