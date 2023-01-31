function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if(chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `<h2>GAMER OVER</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
            document.body.style.backgroundColor = "black"
            document.body.style.color = 'red'
        } else {
            elementoChute.innerHTML += `<div>Valor Inválida</div>`
        }
    }

    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return

    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`   
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += 
        `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div> `
    } else {
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div> `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})