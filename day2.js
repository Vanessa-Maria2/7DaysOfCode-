const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos vc tem?")
const linguagem = prompt("Qual linguagem de programação você está estudando?")

const info = document.getElementById("info");
info.innerHTML= "Olá " + nome +", você tem "+ idade + " anos e já está aprendendo "+ linguagem +"!";

setTimeout(() => {
    const opcao = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

    if(opcao == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
    } else {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}, 1200)
