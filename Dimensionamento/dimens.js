
const tensaoF = document.querySelector(".tensao1")
const tensaoL = document.querySelector(".tensao2")
const corrente = document.querySelector(".corrente")
const botao = document.querySelector(".botao")

const saida = document.querySelector(".saida")

botao.addEventListener("click", (e) => {
    const num1 = Number(tensaoF.value)
    const num2 = Number(tensaoL.value)
    const num3 = Number(corrente.value)
 
    const resistor = (num1 - num2) / num3
    const resistorT = resistor * 1000
 
    saida.innerText = `${resistorT} Ω`
     e.preventDefault();
});
 