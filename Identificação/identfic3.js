

var faixa1 = document.getElementById("faixa1")
var faixa2 = document.getElementById("faixa2")
var faixa4 = document.getElementById("faixa4")

var saida = document.getElementById("saida")
var botao = document.getElementById("exibir")

botao.addEventListener("click", function(){

    var concat = faixa1.value + faixa2.value
    var calculo = Number(concat) * Number(faixa4.value)
    
    saida.innerHTML = `${calculo}Ω ±20%`

    
})





















