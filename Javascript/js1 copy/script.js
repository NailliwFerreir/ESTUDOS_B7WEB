//comando para aparecer no navegador
console.log("Olá mundo 2.0");

let user = 'Willian';
let presetation = ` Oi ${user}!`;
console.log(presetation);

//condicional ternario
let age = 19;
let isAdult = age >= 18 ? 'Yes':'No';
console.log(isAdult);



function calcularImovel(metragem, quartos) {
    let preco = metragem * 3000;
    switch (quartos) {
        case 1 : return preco;
        case 2 : return preco*1.2;
        case 3 : return preco*1.5;
    }
}
let valor = calcularImovel(123,3);
console.log(`O valor do imovel é cerca de :R$ ${valor}`);

//função normal
function nome (parametro) {}
//arrow function
const nome = (parametro) => {}
//função em uma linha 
const nome = (parametro) => funcao;
/*se for um unico parametro n precisa de parenteses*/
//chamando função
nome (parametro);

/*array */
const vetor = [1,2,3];
//adiciona um item no final do array
vetor.push(4);
//remove o ultimo item do array
vetor.pop();// vc tambem pode guardar o item retirado ex: let receive =vet.pop();
//remove o primeiro item do array
vetor.shift();
/* Looping */
let colors = ["blue", "red", "green", "yellow", "purple"];
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);

}
for (let key in colors) {/* ainda continua pelo index do item */
    console.log(colors[key])
}
for (let color of colors) {/* com of voce pega o valor */
    console.log(color);    
}
/* funções uteis */


 let fruits = ['Uva', 'Maça','Banana','Abacaxi','Carambola'];
 console.log(fruits)





