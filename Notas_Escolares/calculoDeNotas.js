//CHALLENGE -  NOTAS ESCOLARES

let entradaDeNotas = prompt("Coloque sua nota", "nota")

function notasEscolares() {
    if(entradaDeNotas > 90) {
        function notaA() {
            alert("sua nota é A")
        }
        notaA()
    } else if(entradaDeNotas > 80 && entradaDeNotas < 90) {
        function notaB() {
            alert("sua nota é B")
        }
        notaB()
    } else if(entradaDeNotas > 70 && entradaDeNotas < 79) {
        function notaC() {
            alert("sua nota é C")
        }
        notaC()
    } else if(entradaDeNotas > 60 && entradaDeNotas < 69) {
        function notaD() {
            alert("sua nota é D")
        }
        notaD()
    } else if(entradaDeNotas < 60) {
        function notaE() {
            alert("sua nota é E")
        }
        notaE()
    }
}

notasEscolares()