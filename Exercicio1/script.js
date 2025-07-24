function soma(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var respsoma = document.getElementById("respsoma")

    //console.log(n1 + n2) // mostra no console
    
    respsoma.textContent = n1 + n2 // texto menas menoria
    //respsoma.innerHTML = n1 + n2 // pega o objeto, ex respsoma
    //respsoma.innerText = n1 + n2 // fds
}

function sub(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var respsub = document.getElementById("respsub")

    respsub.textContent = n1 - n2
}

function mult(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var respmult = document.getElementById("respmult")

    respmult.textContent = n1 * n2
}

function div(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var respdiv = document.getElementById("respdiv")

    if(n1 != 0 || n2 != 0){
    respdiv.textContent = n1 / n2
    }else{
        respdiv.textContent = "Não se divide por 0!"
    }
}

function media(){

    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber
    var n5 = document.getElementById("n5").valueAsNumber
    var respmed = document.getElementById("respmed")

    respmed.textContent = (n1+n2+n3+n4+n5)/5

    var valid = (n1+n2+n3+n4+n5)/5

    if(valid >= 7){
        respmed.style.color = 'green'
    }else{
        respmed.style.color = 'red'
    }

    console.log("media = ", valid)
}