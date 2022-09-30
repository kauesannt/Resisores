const resistor1 = document.querySelector(".res1")
const resistor2 = document.querySelector(".res2")
const botao = document.querySelector(".botao")

const saida = document.querySelector(".saida")

botao.addEventListener("click", (e) => {
    const num1 = Number(resistor1.value)
    const num2 = Number(resistor2.value)

    var div1 = 1 / num1
    var div2 = 1 / num2

    var req = div1 + div2
    var req2 = 1 / req

    saida.innerText = `${req2} Ω`
    e.preventDefault()
})
