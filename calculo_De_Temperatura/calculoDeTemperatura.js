//PARA USAR A MANIPULAÇÃO SOMENTE COM JS TIRE OS COMENTÁRIOS


/*============================================USANDO OBJECT WINDOW DO JS ===========================================*/

/*
let entradaDeTemperaturaDoUsuario = prompt("Você quer converter de:\n \1 - Fahrenheit para Celsius\n \2 - Celsius para Fahrenheit")




function deFahrenheitParaCelsius(F, C) {
        F = prompt("Digite o valor em Fahrenheit:")
        C = (F - 32) * 5/9
        return  alert(`Seu valor de graus Fahrenheit para Celsius é: \n ${C.toFixed(2)}`)
}


function  deCelsiusParaFahrenheit(C, F) {
    C = prompt("Digite o valor em Celsius:")
    F = C * 9/5 + 32
    return  alert(`Seu valor de graus Celsius para Fahrenhet é: \n ${F.toFixed(2)}`)
}





function erro_Caso_O_Valor_Digitado_Pelo_Usuario_Seja_Invalido() {
    
    let erroValorInvalido = document.getElementById("error")
    erroValorInvalido.style.textAlign = "Center"
    erroValorInvalido.style.color = "red"
    erroValorInvalido.innerText = "Erro, o valor digitado é inválido!"
   
}   




switch(entradaDeTemperaturaDoUsuario) {
    case "1": 
    deFahrenheitParaCelsius()
    break;
    case "2": 
    deCelsiusParaFahrenheit()
    break;
    default:
    erro_Caso_O_Valor_Digitado_Pelo_Usuario_Seja_Invalido()
    break;
    
}

*/


/*============================================USANDO O DOM ===========================================*/

/*
document.getElementById("F_para_C").addEventListener('click', 
deFahrenheitParaCelsius)

document.getElementById("C_para_F").addEventListener('click', 
deCelsiusParaFahrenheit)


function deFahrenheitParaCelsius(C, F){
    F = document.getElementById("entradaEmFahrenheit").value;
    C = (F - 32) * 5/9;
    let mostrarConversaoParaCelsius = 
    document.getElementById("conversaoParaCelsius").innerHTML =
    C.toFixed(0);
    mostrarConversaoParaCelsius.parseint()
}

function deCelsiusParaFahrenheit(F, C){
    C = document.getElementById("entradaEmCelsius").value;
    F = C * 9/5 + 32
    let mostrarConversaoParaFahrenheit = 
    document.getElementById("conversaoParaFahrenheit").innerHTML = 
    F.toFixed(0);
    mostrarConversaoParaFahrenheit.parseint()
}

*/

/*============================================Código do Mayk ===========================================*/


// transformDegree("50F")

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    // Fluxo ideal, F => C
    let upDatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo, C => F
    if(celsiusExists) {
        upDatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32 
        degreeSign = 'F'

    }

    
    return formula(upDatedDegree) + degreeSign
    

}

try {
    console.log( transformDegree('10C'))
    console.log( transformDegree('50F'))
    transformDegree('50Z')  
} catch(error) {
    console.log(error)
    // console.log(error.message)
}



