var faixa1 = document.getElementById("faixa1")
var faixa2 = document.getElementById("faixa2")
var faixa3 = document.getElementById("faixa3")
var faixa4 = document.getElementById("faixa4")
var faixa5 = document.getElementById("faixa5")
var faixa6 = document.getElementById("faixa6")

var saida = document.getElementById("saida")
var botao = document.getElementById("exibir")

botao.addEventListener("click", function(){

    var concat = faixa1.value + faixa2.value + faixa3.value
    var calculo = Number(concat) * Number(faixa4.value)
    
    saida.innerHTML = `${calculo}Ω ${faixa6.value} ${faixa5.value} `

    
})

