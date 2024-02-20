let frutas = []
let doces = []
let laticinios = []
let congelados = []
let graosCereais = []
while(true) {
    const opcao = prompt("Você deseja adicionar uma comida na sua lista de compras? 1- Sim ou 2 - Não")
    if(opcao == 1) {
        comida = prompt("Qual comida você deseja inserir? ")
        categoria = prompt("Em qual categoria essa comida se encaixa? 1 - frutas, 2 - doces, 3 - laticínios, 4 - congelados e 5 - Grãos e cereais")
        verificaCategoria(Number(categoria), comida)
    } else {
        alert(`Frutas: ${frutas.join(', ')}\n Doces: ${doces.join(', ')}\n Laticínios: ${laticinios.join(', ')}\n Congelados: ${congelados.join(', ')}\n Grãos e Cereais: ${graosCereais.join(', ')}`)
        break;
    }
}

function verificaCategoria(opcao, comida) {
   switch (opcao) {
    case 1:
        frutas.push(comida)
        break;
    case 2:
        doces.push(comida)
        break;
    case 3:
        laticinios.push(laticinios)
        break
    case 4:
        congelados.push(comida)
        break
    case 5:
        graosCereais.push(comida)
        break
    default:
        alert("Não foi possível adicionar este alimento!");
        break;
   }
}