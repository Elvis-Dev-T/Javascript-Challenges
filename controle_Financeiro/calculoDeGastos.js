//CHALLENGE = SISTEMA DE CONFERÊNCIA FINANCEIRA

/*
let receitas = [
    1000,
    2000,
    5000,
    10000
]

let [salario1, salario2, salario3, salario4] = receitas

const totalDeReceitas = salario1 + salario2 + salario3 + salario4;

let despesas = [
    500,
    4000,
    3000,
    15550
]

let [despesa1, despesa2, despesa3, despesa4] = despesas;

const totalDeGastos = despesa1 + despesa2 + despesa3 + despesa4;

function verLucroOuDespesa() {
    if(totalDeGastos < totalDeReceitas) {
        console.log("Ótimo, você teve mais lucro do que despesas, um bom controle financeiro")
    } else if(totalDeGastos > totalDeReceitas) {
        console.log(("Péssimo, você teve mais despesas do que lucros, um mau controle financeiro"))
    }
}   
 
verLucroOuDespesa();
*/


let family = {
    incomes: [5000, 10000, 15000, 4500, 8500],
    expenses: [2500, 5482, 8000, 31205]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculatExpenses = sum(family.expenses);

    const total = calculateIncomes - calculatExpenses;

    const itsOkay = total >= 0;
    const itsBad = total < 0;

    let message = "Good financial Life";

    if(itsOkay) message;
    if(itsBad) message = "Terrible financial Life";

    //console.log(`${message}, você tem o saldo de ${total}R$`)

    const body = document.body;

    
    const botaoParaVerSaldo = document.createElement("button")
    botaoParaVerSaldo.innerHTML = "CLIQUE PARA VER SEU SALDO"
    botaoParaVerSaldo.style.marginLeft = "510px"
    botaoParaVerSaldo.addEventListener('click', verSaldo)



    function verSaldo() {
        
        
    const apresentaçãoDeSaldo = document.createElement("h1")
    apresentaçãoDeSaldo.innerHTML = `${message} </br> Your Score is: <hr>`
    apresentaçãoDeSaldo.style.textAlign = "center"


    const saldo = document.createElement("h2")
    saldo.innerHTML = `<mark> ${total} </mark>`
    saldo.style.textAlign = "center"

    body.append(apresentaçãoDeSaldo, saldo)
    }


    body.append( botaoParaVerSaldo)


    
}

calculateBalance()
