type QualquerCoisa = () => void;//aqui voce esta dizendo que a função espera não retornar nada

const testandoQualqueCoisa: QualquerCoisa = () => {
    return true;
}
function teste():void/* aqui o retorno da função foi tipado por isso o erro */ {
    //Alguma coisa
    return true;
}
