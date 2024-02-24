let listaDeCompras = {'frutas': [], 'doces': [], 'laticinios': [], 'congelados': [], 'graosCereais': []}
while(true) {
    const opcao = prompt("1 - Você deseja adicionar uma comida na sua lista de compras\n2 - Remover algum item da lista\n3 - Sair")
   if(opcao == 1) {
        comida = prompt("Qual comida você deseja inserir? ")
        categoria = prompt("Em qual categoria essa comida se encaixa? 1 - frutas, 2 - doces, 3 - laticínios, 4 - congelados e 5 - Grãos e cereais")
        verificaCategoria(Number(categoria), comida)
    } else if(opcao == 2) {
        exibeListaDeCompras();
        comida = prompt("Digite o nome da comida que vc deseja remover");
        remover(comida);
    } else {
        exibeListaDeCompras();
        break;
    }
}

function exibeListaDeCompras() {
    alert(`Frutas: ${listaDeCompras.frutas.join(', ')}\n Doces: ${listaDeCompras.doces.join(', ')}\n Laticínios: ${listaDeCompras.laticinios.join(', ')}\n Congelados: ${listaDeCompras.congelados.join(', ')}\n Grãos e Cereais: ${listaDeCompras.graosCereais.join(', ')}`)
}

function verificaCategoria(opcao, comida) {
   switch (opcao) {
    case 1:
        listaDeCompras.frutas.push(comida)
        break;
    case 2:
        listaDeCompras.doces.push(comida)
        break;
    case 3:
        listaDeCompras.laticinios.push(comida)
        break
    case 4:
        listaDeCompras.congelados.push(comida)
        break
    case 5:
        listaDeCompras.graosCereais.push(comida)
        break
    default:
        alert("Não foi possível adicionar este alimento!");
        break;
   }
}

function remover(comida) {
    for(let categoria in listaDeCompras) {
        let index = listaDeCompras[categoria].indexOf(comida);
        if (index !== -1) {
            listaDeCompras[categoria].splice(index, 1);
            alert(`${comida} foi removido da lista de compras.`);
            return;
        }
    }
    alert(`O item ${comida} não foi encontrado na lista.`);
}