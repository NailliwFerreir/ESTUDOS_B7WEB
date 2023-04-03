
//tipagem de objetos

function funcaoQlqr(usuario:{nome: string, idade?:number}/* o ? deixa como opcional */): string {
    if (usuario.idade!==undefined){
        return `Olá ${usuario.nome} tudo bem? Você tem ${usuario.idade} anos.`
    } else {
        return `Olá ${usuario.nome} tudo bem?`
    }
}

let u = {
    nome: "Taldu Nome",
    idade: 15
}

funcaoQlqr(u);