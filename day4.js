const num = Math.floor(Math.random() * (100 - 0 + 1) + 0);
var chute = 0
for(let i = 0; i < 3; i++){
    chute = prompt("Chute um número entre 0 e 100: ");
    if(chute == num){
        alert("Parabéns! Você acertou o número!")
        break;
    }
}

if(chute != num) 
    alert(`Ah, que pena!! Não foi dessa vez. O número sorteado era ${num}`)