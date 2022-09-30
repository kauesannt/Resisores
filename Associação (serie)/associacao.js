const resistor1 = document.querySelector(".res1")
const resistor2 = document.querySelector(".res2")
const botao = document.querySelector(".botao")

const saida = document.querySelector(".saida")

botao.addEventListener("click", (e) => {
    const num1 = Number(resistor1.value)
    const num2 = Number(resistor2.value)

    const soma = num1 + num2

    saida.innerText = `${soma} Ω`
    e.preventDefault();
});
