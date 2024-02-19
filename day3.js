const area = prompt("Em qual aréa você quer seguir? 1- Front-End ou 2- Back-End.")
let opcao = "";

if(area == 1) {
    opcao = prompt("O que você quer aprender React ou Vue?")
} else {
    opcao = prompt("O que você quer aprender C# ou Java?")
}

const estudo = prompt("1- Seguir se especializando na área escolhida ou 2- Seguir se desenvolvendo para se tornar Fullstack. ")
const aux = (area == 1) ? "Front-End" : "Back-End";

var msg = (estudo == 1) ? `Show, vamos continuar se especializando em ${aux} utilizando ${opcao}` : "Vamos continuar os estudos para se tornar fullstack!!";
alert(msg)

var tecnologias = []
tecnologias.push(prompt("Quais são as tecnologias que você gostaria de se especializar ou de conhecer?"))
let maisTecnologias = true;
while(maisTecnologias) {
    var op = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim responda OK, se não digite Não")
    if(op.toUpperCase() === "OK") {
        tecnologias.push(prompt("Digite o nome da tecnologia: "));
    } else {
        maisTecnologias = false;
    }
}

alert(`Incrível escolha! Você está prestes a mergulhar na área de ${aux}, explorando as seguintes tecnologias: ${tecnologias.join(', ')}. 
Que sua jornada de aprendizado seja repleta de desafios estimulantes e conquistas gratificantes. Estamos ansiosos para ver o que você construirá! 🚀`);